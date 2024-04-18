import React from "react";
import * as S from "./style";
import { Row, NovelBox, NovelSearchBox } from "../../styles/ui";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
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

const SearchPage = () => {
  const path = useLocation().pathname;

  const [sort, setSort] = useState("LATEST");

  const [novels, setNovels] = useState<{ data: Novel[]; meta: any }>({
    data: [],
    meta: {},
  });

  const { value } = useParams<string>();

  useEffect(() => {
    getSearchedNovels();
  }, [sort]);

  const getSearchedNovels = async () => {
    try {
      const response = await instance.get("/novel/search", {
        params: {
          query: value,
          size: 10,
          index: 1,
          viewType: sort,
        },
      });
      setNovels(response.data);
    } catch (error) {
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
      <S.SearchContentsArea>
        {novels.data.length === 0 ? (
          <S.NoResult>검색어와 일치하는 결과가 없습니다.</S.NoResult>
        ) : (
          novels.data.map((novel: Novel, index: number) => (
            <NovelSearchBox
              key={index}
              uid={novel.uid}
              thumbnail={novel.thumbnail}
              title={novel.title}
              user={novel.user}
              views={novel.views}
              content={novel.content}
            />
          ))
        )}
      </S.SearchContentsArea>
    </>
  );
};

export default SearchPage;
