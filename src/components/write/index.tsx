import React from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import { UserIcon } from "../../assets";

const WritePage = () => {
  return (
    <>
      <Row>
        <Column>
          <S.ContentText>소설 구조 설정</S.ContentText>
          <S.ContentBox>
            <Row alignItems="center">
              <UserIcon width={2.4} height={2.4} />
              <S.RowText>인물</S.RowText>
              <S.ContentInputBox placeholder="인물추가..." type="text" />
            </Row>
          </S.ContentBox>
        </Column>
      </Row>
    </>
  );
};

export default WritePage;
