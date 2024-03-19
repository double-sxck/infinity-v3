import React from "react";
import * as S from "./style";
import { Row } from "../../styles/ui";
import NovelBox from "./default";
import NovelSearchBox from "./search";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  console.log(useLocation().pathname)
  return (
    <>
      <Row gap={2.4}>
        <S.ListBox>전체</S.ListBox>
        <S.ListBox>최신</S.ListBox>
        <S.ListBox>인기</S.ListBox>
      </Row>
      {
        useLocation().pathname !== "/search" ?

        <S.ContentsArea>
          <NovelBox />
        </S.ContentsArea> :

        <S.SearchContentsArea>
          <NovelSearchBox />
        </S.SearchContentsArea>
      }
    </>
  );
};

export default MainPage;
