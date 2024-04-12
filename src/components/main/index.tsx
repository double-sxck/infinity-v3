import * as S from "./style";
import { NovelBox, Row } from "../../styles/ui";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../apis/instance";

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

const MainPage = () => {
  const [sort, setSort] = useState("LATEST");

  const [novels, setNovels] = useState<{ data: Novel[]; meta: any }>({
    data: [],
    meta: {},
  });

  useEffect(() => {
    getNovels();
  }, []);

  const getNovels = async () => {
    try {
      const response = await instance.get("/novel", {
        params: {
          size: 50,
          index: 1,
          viewType: sort,
        },
      });
      setNovels(response.data);
    } catch (error: any) {
      if (error.response) {
        window.alert(`${error.response.status}에러가 발생했습니다.`);
      } else {
        window.alert("네트워크 에러가 발생했습니다.");
      }
      console.log(error);
    }
  };

  return (
    <>
      <Row gap={2.4}>
        <S.ListBox
          onClick={() => setSort("LATEST")}
          $selected={sort === "LATEST"}
        >
          최신
        </S.ListBox>
        <S.ListBox
          onClick={() => setSort("POPULAR")}
          $selected={sort === "POPULAR"}
        >
          인기
        </S.ListBox>
      </Row>
      <S.ContentsArea>
        <NovelBox
          uid={1}
          thumbnail={"13"}
          title={"ㅁㅇㄹ"}
          user={"novel.user"}
          views={24}
        />
        {novels.data.map((novel: Novel, index: number) => (
          <NovelBox
            key={index}
            uid={novel.uid}
            thumbnail={novel.thumbnail}
            title={novel.title}
            user={novel.user}
            views={novel.views}
          />
        ))}
      </S.ContentsArea>
    </>
  );
};

export default MainPage;
