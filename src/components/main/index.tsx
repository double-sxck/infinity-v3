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

const MainPage = () => {
  const path = useLocation().pathname;
  const {category} = useParams();
  const categories = {
    romance: <><BlackHeartArrowIcon width={80} height={80} /><S.Category>로맨스/감성</S.Category></>,
    fantasy: <><BlackMagicStickIcon width={80} height={80} /><S.Category>판타지/이세계</S.Category></>,
    daily: <><BlackCoffeeIcon width={80} height={80} /><S.Category>일상/코미디</S.Category></>,
    thriller: <><BlackScaryFaceIcon width={80} height={80} /><S.Category>스릴러/호러</S.Category></>,
    feature: <><BlackCopyIcon width={80} height={80} /><S.Category>장편/시리즈</S.Category></>,
    etc: <><BlackMoreIcon width={80} height={80} /><S.Category>그 외</S.Category></>,
  };

  const [sort, setSort] = useState("LATEST")

  const [novels, setNovels] = useState({data: [], meta: {}});
  useEffect(() => {
    if (path === '/') getNovels();
    else if (path === '/search') getSearchedNovels();
    else if (path.includes('/category')) getCategoryNovels(category || "")
  }, [sort])

  const getNovels = async () => {
    try {
      const response = await instance.get("/novel", {
        params: {
          size: 10,
          index: 1,
          viewType: sort
        }
      });
      // setNovels(response.data);
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
          viewType: sort
        }
      });
      // setNovels(response.data);
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
        }
      });
      // setNovels(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      {
        path === "/" || path === "/search" ?
        <Row gap={2.4}>
          <S.ListBox
            onClick={() => setSort("LATEST")}
            $selected={sort === "LATEST"}
          >최신</S.ListBox>
          <S.ListBox
            onClick={() => setSort("POPULAR")}
            $selected={sort === "POPULAR"}
          >인기</S.ListBox>
        </Row> :
        <Row gap={2.4} alignItems="center">
          {category === "romance" && categories['romance']}
          {category === "fantasy" && categories['fantasy']}
          {category === "daily" && categories['daily']}
          {category === "thriller" && categories['thriller']}
          {category === "feature" && categories['feature']}
          {category === "etc" && categories['etc']}
        </Row>
      }
      {
        path === "/" ?

        <S.ContentsArea>
          {
            novels.data.map((novel: Novel, index: number) => (
              <NovelBox
                key={index}
                uid={novel.data.uid}
                thumbnail={novel.data.thumbnail}
                title={novel.data.title}
                user={novel.data.user}
                views={novel.data.views}
              />
            ))
          }
          <NovelBox
            key={0}
            uid={1}
            thumbnail={'data:image/png;base64,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'}
            title={'전생했더니 슬라임이었던 건에 대하여'}
            user={'강승훈'}
            views={41324}
          />
        </S.ContentsArea> :

        <S.SearchContentsArea>
          {
            novels.data.map((novel: Novel, index: number) => (
              <NovelSearchBox
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
          <NovelSearchBox
            key={0}
            uid={1}
            thumbnail={'data:image/png;base64,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'}
            title={'전생했더니 슬라임이었던 건에 대하여'}
            user={'강승훈'}
            views={41324}
            content={'우나ㅗ어ㅏㅣ으뤄너라느ㅜ러ㅏㅏㅇ라ㅣ느라ㅣ늬ㅏㄹㄴ으ㅏㅣㄹ우ㅏ라ㅣㅈ대러ㅜ파둧거ㅏ룬다ㅓ루아륻ㄹㅈ더ㅐ뢔쟈루ㅏ더ㅜㄹ자ㅓㅜㅏㄴ어란어리ㅏ널댜ㅐ자ㅡ루ㅠ홀다으루ㅗㅓ야ㅏㅡㅜ포ㅓㅑㅐㄴ아뤄'}
          />
        </S.SearchContentsArea>
      }
    </>
  );
};

export default MainPage;
