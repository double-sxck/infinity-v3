import { useEffect, useState } from "react";
import * as S from "./style";
import UserDefualtIcon from "../../assets/images/UserDefaultIcon";
import { Column, Row } from "../../styles/ui";
import UserContents from "./page/user";
import NovelContents from "./page/novel";
import { instance } from "../../apis/instance";
import { Link, useParams } from "react-router-dom";
import { PencilIcon } from "../../assets";

interface Novel {
  uid: number;
  user_uid: number;
  title: string;
  content: string;
  thumbnail: string;
  category: any;
  views: number;
  novel_likes: any;
};

const UserPage = () => {
  const [pageType, setPageType] = useState<number>(0); // number 타입으로 변경
  const [userInfo, setUserInfo] = useState({totalLikesCounts: 0, totalNovels: [], userInfo: {uid: 0, id: "아이디", nickname: "닉네임"}, views: 0});
  const [novels, setNovels] = useState<Novel[]>([]);
  const { type } = useParams<string>();

  useEffect(() => {
    getUserInfo();
    if (type === "info") setPageType(0);
    else if (type === "novel") setPageType(1);
    else if (type === "like") setPageType(2);
  }, [type]);

  useEffect(() => {
    getNovels();
  }, [pageType, userInfo])

  const getUserInfo = async () => {
    try {
        const token = localStorage.getItem('refresh-token');
        const response = await instance.get("/user", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response)
        setUserInfo(response.data);
    } catch (error) {
        console.log(error);
    }
  };

  const getNovels = async () => {
    if (pageType === 0) return;
    try {
        const response = await instance.get("/novel/user/"+userInfo.userInfo.uid, {
          params: {
              size: 10,
              index: 1,
              userFeedType: pageType === 1 ? "FEED" : "USER_LIKED" // pageType이 1이면 FEED, 아니면 USER_LIKED
          },
        });
        setNovels(response.data.data)
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <S.UserPageBox>
        <Row gap="8">
          <UserDefualtIcon />
          <Column justifyContent="space-around">
            <S.NickNameText>{userInfo.userInfo.nickname}</S.NickNameText>
            <S.UserProfileText>소설 {userInfo.totalNovels.length}개</S.UserProfileText>
            <S.UserProfileText>조회수 {userInfo.views ? userInfo.views : 0}회 ‧ 좋아요 {userInfo.totalLikesCounts}개</S.UserProfileText>
          </Column>
        </Row>
      </S.UserPageBox>
      <S.ChooseInfomation>
        <div className="ml-20 mt-8">
          <Row gap={4}>
            <Link to="/profile/info">
              <S.InfoItem type={(pageType === 0).toString()} >
                내 정보
              </S.InfoItem>
            </Link>
            
            <Link to="/profile/novel">
              <S.InfoItem type={(pageType === 1).toString()} >
                내 소설
              </S.InfoItem>
            </Link>
            
            <Link to="/profile/like">
              <S.InfoItem type={(pageType === 2).toString()}>
                좋아요한 소설
              </S.InfoItem>
            </Link>
          </Row>
        </div>
      </S.ChooseInfomation>
      <S.HerfChildLine />
      <S.Under>
        {pageType === 0 ? ( // pageType이 0일 때만
          <UserContents userid={userInfo.userInfo.id} nickname={userInfo.userInfo.nickname} />
        ) : 
          novels.length === 0 && pageType === 1 ?
            <Column gap={2.4}>
              <S.NoResult>AI로 쉽게 소설을 쓰고, 공유해보세요</S.NoResult>
              <Link to="/write">
                <S.WriteButton><PencilIcon width={2.4} height={2.4} />새 소설 쓰기</S.WriteButton>
              </Link>
            </Column> :
          novels.length === 0 && pageType === 2 ?
            <S.NoResult>마음에 드는 소설에 좋아요를 남기고 이곳에서 관리해보세요</S.NoResult> :
          novels.map((novel: Novel, index: number) => (
            <NovelContents
              key={index}
              uid={novel.uid}
              thumbnail={novel.thumbnail}
              title={novel.title}
              views={novel.views}
              content={novel.content}
            />
          ))
        }
      </S.Under>
    </>
  );
};

export default UserPage;
