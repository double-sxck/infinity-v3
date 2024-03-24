import React, { useEffect, useState } from "react";
import * as S from "./style";
import UserDefualtIcon from "../../assets/images/UserDefaultIcon";
import { Column, Row } from "../../styles/ui";
import UserContents from "./page/user";
import NovelContents from "./page/novel";
import { instance } from "../../apis/instance";

interface Novel {
  data: {
    uid: number;
    user: any;
    user_uid: number;
    title: String;
    content: String;
    thumbnail: String;
    category: any;
    views: number;
    novel_likes: any;
    conmment: any;
  };
}

const UserPage = () => {
  const [pageType, usePageType] = useState<boolean[]>([true, false, false]);
  const [userInfo, setUserInfo] = useState({totalLikes: 0, totalNovels: 0, userInfo: {uid: 0, id: "아이디", nickname: "닉네임"}, views: 0});
  const [novels, setNovels] = useState({data: [], meta: []})
  const [flag, setFlag] = useState(0)

  const PageNation = (id: number) => {
    let newPageType = [false, false, false];
    newPageType[id] = true;
    usePageType(newPageType);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (!pageType[0]) {
      if (pageType[1] && flag !== 1) {
        getNovels()
        setFlag(1)
      }
      else if (pageType[2] && flag !== 2) {
        getNovels()
        setFlag(2)
      } 
    }
  }, [pageType])

  const getUserInfo = async () => {
    try {
        const token = localStorage.getItem('refresh-token');
        const response = await instance.get("/user", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data)
        console.log(userInfo)
    } catch (error) {
        console.log(error);
    }
  };

  const getNovels = async () => {
    try {
        const response = await instance.get("/novel/user/"+userInfo.userInfo.uid, {
          params: {
              size: 10,
              index: 1,
              userFeedType: pageType[1] ? "FEED" : "USER_LIKED"
          },
        });
        setNovels(response.data)
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
            <S.UserProfileText>소설 {userInfo.totalNovels}개</S.UserProfileText>
            <S.UserProfileText>조회수 {userInfo.views ? userInfo.views : 0}회 ‧ 좋아요 {userInfo.totalLikes}개</S.UserProfileText>
          </Column>
        </Row>
      </S.UserPageBox>
      <S.ChooseInfomation>
        <div className="ml-20 mt-8">
          <Row gap={4}>
            <S.InfoItem
              type={pageType[0]}
              onClick={() => {
                PageNation(0);
              }}
            >
              내 정보
            </S.InfoItem>
            <S.InfoItem
              type={pageType[1]}
              onClick={() => {
                PageNation(1);
              }}
            >
              내 소설
            </S.InfoItem>
            <S.InfoItem
              type={pageType[2]}
              onClick={() => {
                PageNation(2);
              }}
            >
              좋아요한 소설
            </S.InfoItem>
          </Row>
        </div>
      </S.ChooseInfomation>
      <S.HerfChildLine />
      {pageType[0] === true ? (
        <UserContents userid={userInfo.userInfo.id} nickname={userInfo.userInfo.nickname} />
      ) : 
        novels.data.map((novel: Novel, index: number) => (
          <NovelContents
            key={index}
            uid={novel.data.uid}
            thumbnail={novel.data.thumbnail}
            title={novel.data.title}
            user={novel.data.user}
            views={novel.data.views}
            content={novel.data.content}
          />
        ))
      }
    </>
  );
};

export default UserPage;
