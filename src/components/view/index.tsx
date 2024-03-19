import React from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import { BrashIcon, ImageIcon, TextInputIcon } from "../../assets";

const ViewPage = () => {
  return (
    <>
      <S.PageTitle>업로드 설정</S.PageTitle>
      <S.ContentsBox>
        <Column>
          <S.ImageBox></S.ImageBox>
          <div className="mt-6 w-90">
            <Row alignItems="center" justifyContent="space-between">
              <Row>
                <ImageIcon />
                <S.ContentTextComponents>썸네일</S.ContentTextComponents>
              </Row>
              <S.InputBox
                type="text"
                placeholder="썸네일 직접 지정"
              ></S.InputBox>
              <S.BrashButton>
                <BrashIcon />
              </S.BrashButton>
            </Row>
          </div>
        </Column>
        <S.ColumnLine />
        <div className="w-full">
          <Column alignItems="center">
            <Row justifyContent="center" alignItems="center" gap={4}>
              <TextInputIcon />
              <S.TitleColumn>제목</S.TitleColumn>
            </Row>
            <S.TitleInput placeholder="제목 작성..." type="text" />

            <S.RowLine />
          </Column>
        </div>
      </S.ContentsBox>
    </>
  );
};

export default ViewPage;
