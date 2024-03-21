import React, { useRef } from "react";
import * as S from "./style";
import { useCommentModal } from "../../hooks/useCommentModal";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { Column, Row } from "../../styles/ui";
import { HeartArrowIcon, LikeIcon, CommentIcon } from "../../assets";

const CommentModal = () => {
  const { closeCommentModal } = useCommentModal();
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, closeCommentModal);
  return (
    <S.Page>
      <S.Modal ref={ref}>
        <Column gap={10} justifyContent="center" alignItems="center">
          <div style={{ alignSelf: "flex-start" }}>
            <Row gap={8.6}>
              <S.ImageBox />
              <Column gap={4}>
                <S.NovelTitle>소설 제목</S.NovelTitle>
                <S.NovelContent>마동현우</S.NovelContent>
                <Row>
                  <HeartArrowIcon />
                  <S.NovelContent>로멘스/감성</S.NovelContent>
                </Row>
                <S.NovelContent>조회수 [n]</S.NovelContent>
                <Row>
                  <LikeIcon />
                  <S.NovelContent>[n]</S.NovelContent>
                </Row>
              </Column>
            </Row>
          </div>
          <S.HelfLine />

          <S.NovelContent>
            {" "}
            [소설 내용] [가나다 라마 바사아 자차 카타파 하가 나다라마 바사아
            자차 카타파하 가나다 라마 바사 아자차 카타 파하 가나 다 라마바
            사아자차카타 파하가 나다 라 마바 사아자차카 타 파하 가나다 라마바
            사아자 차 카타파 하가나 다라마바사 아자 차카타파 하가 나다 라 마바
            사아 자 차카타파 하 가나 다 라마바사 아자 차 카타 파하 가 나 다라
            마바사 아자 차카 타 파하 가 나다 라 마 바 사아 자차카 타파 하가나
            다라 마바사 아 자 차 카타파 하 가나 다 라 마바 사아자차카 타파하
            가나 다라 마 바사아자 차카타파 하가나다 라마바 사아자차카 타파하가
            나 다라마 바사 아 자 차카 타 파 하가나다 라마 바사 아자차 카타 파하
            가나 다 라 마바 사 아자차 카타 파하가나 다라 마바 사아 자차카타
            파하가나 다라마 바사 아자차 카타파 하가 나다라마바사 아자차카타파
            하가 나 다라 마바사아자차카 타파하가 나다라 마 바 사 아자차카타파
            하가나 다라 마바 사아 자차 카 타파 하가나다라 마바사 아자차 카타파
            하가 나다 라마 바사아 자차 카타파 하가 나다 라마 바사 아자 차카타
            파하]
          </S.NovelContent>
          <S.HelfLine />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "0rem 8.6rem",
            }}
          >
            <div className="mb-20">
              <Row alignItems="center" gap={3}>
                <CommentIcon />
                <p className="font-bold text-2xl text-gray-700">감상평 [n]개</p>
              </Row>
            </div>
            <div className="mb-20">
              <S.MessageInput placeholder="감상평 남기기..." />
            </div>
            <S.MessageBox isMy={true}>힝구리핑퐁</S.MessageBox>
            <S.MessageBox isMy={false}>퐁퐁남</S.MessageBox>
          </div>
          <div style={{ height: "10rem" }}></div>
        </Column>
      </S.Modal>
    </S.Page>
  );
};

export default CommentModal;
