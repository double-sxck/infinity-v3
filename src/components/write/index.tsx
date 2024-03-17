import React from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import {
  ImagesIcon,
  PencilIcon,
  PlayButtonIcon,
  TrashIcon,
  UserIcon,
} from "../../assets";

const WritePage = () => {
  return (
    <>
      <Row alignItems="center" justifyContent="center" gap={8}>
        <Column>
          <S.ContentText>소설 구조 설정</S.ContentText>
          <S.ContentBox>
            <div
              style={{
                width: "100%",
                padding: "3.3rem 4rem",
                boxSizing: "border-box",
              }}
            >
              <Column gap={4}>
                <Row alignItems="center">
                  <UserIcon width={24} height={24} />
                  <S.RowText>인물</S.RowText>
                  <S.ContentInputBox placeholder="인물 추가..." type="text" />
                </Row>
                <Row alignItems="center">
                  <PlayButtonIcon width={24} height={24} />
                  <S.RowText>사건</S.RowText>
                  <S.ContentInputBox placeholder="사건 추가..." type="text" />
                </Row>
                <Row alignItems="center">
                  <ImagesIcon width={24} height={24} />
                  <S.RowText>배경</S.RowText>
                  <S.ContentInputBox placeholder="배경 추가..." type="text" />
                </Row>
              </Column>
            </div>
            <S.HelfLine />
            <div
              style={{
                width: "100%",
                padding: "3.3rem 4rem",
                boxSizing: "border-box",
              }}
            >
              <Column gap={2}>
                <Row justifyContent="space-between">
                  <div style={{ display: "flex" }}>
                    <ImagesIcon width={24} height={24} />
                    <S.AddContentText>[추가한 배경 키워드]</S.AddContentText>
                  </div>
                  <TrashIcon />
                </Row>
                <Row justifyContent="space-between">
                  <div style={{ display: "flex" }}>
                    <ImagesIcon width={24} height={24} />
                    <S.AddContentText>[추가한 배경 키워드]</S.AddContentText>
                  </div>
                  <TrashIcon />
                </Row>
              </Column>
            </div>
          </S.ContentBox>
        </Column>
        <S.WriteButton>
          <PencilIcon width={40} height={40} />
        </S.WriteButton>
        <Column>
          <S.ContentText>소설 미리 보기</S.ContentText>
          <S.ContentBox>
            <S.VeiwNovel>
              {" "}
              [소설 내용] [가나다 라마 바사아 자차 카타파 하가 나다라마 바사아
              자차 카타파하 가나다 라마 바사 아자차 카타 파하 가나 다 라마바
              사아자차카타 파하가 나다 라 마바 사아자차카 타 파하 가나다 라마바
              사아자 차 카타파 하가나 다라마바사 아자 차카타파 하가 나다 라 마바
              사아 자 차카타파 하 가나 다 라마바사 아자 차 카타 파하 가 나 다라
              마바사 아자 차카 타 파하 가 나다 라 마 바 사아 자차카 타파 하가나
              다라 마바사 아 자 차 카타파 하 가나 다 라 마바 사아자차카 타파하
              가나 다라 마 바사아자 차카타파 하가나다 라마바 사아자차카 타파하가
              나 다라마 바사 아 자 차카 타 파 하가나다 라마 바사 아자차 카타
              파하 가나 다 라 마바 사 아자차 카타 파하가나 다라 마바 사아
              자차카타 파하가나 다라마 바사 아자차 카타파 하가 나다라마바사
              아자차카타파 하가 나 다라 마바사아자차카 [소설 내용] [가나다 라마
              바사아 자차 카타파 하가 나다라마 바사아 자차 카타파하 가나다 라마
              바사 아자차 카타 파하 가나 다 라마바 사아자차카타 파하가 나다 라
              마바 사아자차카 타 파하 가나다 라마바 사아자 차 카타파 하가나
              다라마바사 아자 차카타파 하가 나다 라 마바 사아 자 차카타파 하
              가나 다 라마바사 아자 차 카타 파하 가 나 다라 마바사 아자 차카 타
              파하 가 나다 라 마 바 사아 자차카 타파 하가나 다라 마바사 아 자 차
              카타파 하 가나 다 라 마바 사아자차카 타파하 가나 다라 마 바사아자
              차카타파 하가나다 라마바 사아자차카 타파하가 나 다라마 바사 아 자
              차카 타 파 하가나다 라마 바사 아자차 카타 파하 가나 다 라 마바 사
              아자차 카타 파하가나 다라 마바 사아 자차카타 파하가나 다라마 바사
              아자차 카타파 하가 나다라마바사 아자차카타파 하가 나 다라
              마바사아자차카
            </S.VeiwNovel>
          </S.ContentBox>
        </Column>
      </Row>
    </>
  );
};

export default WritePage;