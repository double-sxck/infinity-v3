import React from "react";
import * as S from "./style";
import { Row } from "../../styles/ui";
import NovelBox from "./default";

const MainPage = () => {
  return (
    <>
      <Row gap={2.4}>
        <S.ListBox>전체</S.ListBox>
        <S.ListBox>최신</S.ListBox>
        <S.ListBox>인기</S.ListBox>
      </Row>
      <S.ContentsArea>
        <NovelBox />
      </S.ContentsArea>
    </>
  );
};

export default MainPage;
