import * as S from "./style";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams 임포트
import NovelFindBox from "./block";
import { instance } from "../../apis/instance";
import { AxiosResponse } from "axios";

interface Novel {
  uid: number;
  user: any;
  user_uid: number;
  title: string;
  content: string;
  thumbnail: string;
  category: any;
  views: number;
  novel_likes: any;
  comment: any;
}

type NovelResponse = AxiosResponse<{ data: Novel[] }>; // 응답 형식 수정

const FindPage = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const { type } = useParams<{ type: string }>(); // URL 파라미터 가져오기

  const getType = async () => {
    try {
      console.log(type);
      const response: NovelResponse = await instance.get<{ data: Novel[] }>( // 응답 형식 수정
        "/novel/category",
        {
          params: {
            size: 10,
            index: 1,
            category: type,
          },
        }
      );

      // API 응답 데이터 확인
      console.log("API Response:", response.data);

      // API 응답으로 받은 소설 데이터를 상태에 저장합니다.
      setNovels(response.data.data); // 소설 데이터 설정
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, [type]); // 카테고리가 변경될 때마다 useEffect 재실행

  return (
    <S.SearchContentsArea>
      {/* novels 상태의 값이 배열인지 확인하고 렌더링합니다. */}
      {Array.isArray(novels) && novels.length > 0 ? (
        novels.map((novel) => (
          <NovelFindBox
            key={novel.uid}
            uid={novel.uid}
            thumbnail={novel.thumbnail}
            title={novel.title}
            user={novel.user}
            views={novel.views}
            content={novel.content}
          />
        ))
      ) : (
        <p>No novels found.</p>
      )}
    </S.SearchContentsArea>
  );
};

export default FindPage;
