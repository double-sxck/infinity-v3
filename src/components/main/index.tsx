import React from "react";
import * as S from "./style";
import { Row } from "../../styles/ui";
import NovelBox from "./default";
import NovelSearchBox from "./search";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  BlackCoffeeIcon,
  BlackCopyIcon,
  BlackHeartArrowIcon,
  BlackMagicStickIcon,
  BlackMoreIcon,
  BlackScaryFaceIcon,
} from "../../assets";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../../apis/instance";
import { useCommentModal } from "../../hooks/useCommentModal";

interface Novel {
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
}

const MainPage = () => {
  const path = useLocation().pathname;
  const { category } = useParams();
  const categories = {
    romance: (
      <>
        <BlackHeartArrowIcon width={80} height={80} />
        <S.Category>로맨스/감성</S.Category>
      </>
    ),
    fantasy: (
      <>
        <BlackMagicStickIcon width={80} height={80} />
        <S.Category>판타지/이세계</S.Category>
      </>
    ),
    daily: (
      <>
        <BlackCoffeeIcon width={80} height={80} />
        <S.Category>일상/코미디</S.Category>
      </>
    ),
    thriller: (
      <>
        <BlackScaryFaceIcon width={80} height={80} />
        <S.Category>스릴러/호러</S.Category>
      </>
    ),
    feature: (
      <>
        <BlackCopyIcon width={80} height={80} />
        <S.Category>장편/시리즈</S.Category>
      </>
    ),
    etc: (
      <>
        <BlackMoreIcon width={80} height={80} />
        <S.Category>그 외</S.Category>
      </>
    ),
  };

  const [sort, setSort] = useState("LATEST");

  const [novels, setNovels] = useState({ data: [], meta: {} });
  useEffect(() => {
    if (path === "/") getNovels();
    else if (path === "/search") getSearchedNovels();
    else if (path.includes("/category")) getCategoryNovels(category || "");
  }, [sort]);

  const getNovels = async () => {
    try {
      const response = await instance.get("/novel", {
        params: {
          size: 10,
          index: 1,
          viewType: sort,
        },
      });
      console.log(response);
      setNovels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchedNovels = async () => {
    try {
      const response = await instance.get("/novel/search", {
        params: {
          query: "test",
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

  const getCategoryNovels = async (category: String) => {
    try {
      const response = await instance.get("/novel/category", {
        params: {
          size: 10,
          index: 1,
          category: category,
        },
      });
      setNovels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {path === "/" || path === "/search" ? (
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
      ) : (
        <Row gap={2.4} alignItems="center">
          {category === "romance" && categories["romance"]}
          {category === "fantasy" && categories["fantasy"]}
          {category === "daily" && categories["daily"]}
          {category === "thriller" && categories["thriller"]}
          {category === "feature" && categories["feature"]}
          {category === "etc" && categories["etc"]}
        </Row>
      )}
      {path === "/" ? (
        <S.ContentsArea>
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
      ) : (
        <S.SearchContentsArea>
          {novels.data.map((novel: Novel, index: number) => (
            <NovelSearchBox
              key={index}
              uid={novel.uid}
              thumbnail={novel.thumbnail}
              title={novel.title}
              user={novel.user}
              views={novel.views}
              content={novel.content}
            />
          ))}
        </S.SearchContentsArea>
      )}
    </>
  );
};

export default MainPage;
