import React, { useState } from "react";
import * as S from "./style";
import { Column, Row } from "../../styles/ui";
import { BrashIcon, CoffeeIcon, CopyIcon, HeartArrowIcon, ImageIcon, MagicStickIcon, MoreIcon, ScaryFaceIcon, TextInputIcon, UploadIcon } from "../../assets";
import ShopIcon from "../../assets/images/ShopIcon";

const ViewPage = () => {
  const [tag, setTag] = useState(1);

  return (
    <>
      <S.Title>업로드 설정</S.Title>
      <Row alignItems="center" gap={8}>
        <S.ContentBox>
          <Column gap={4} alignItems="center">
            <S.Empty />
            <S.Thumbnail />
            <Row justifyContent="center" alignItems="center">
              <ImageIcon />
              <S.RowText>썸네일</S.RowText>
              <S.ContentInputBox
                placeholder="썸네일 직접 지정..."
              />
              <S.DrawButton>
                <BrashIcon />
              </S.DrawButton>
            </Row>
            <S.Empty />
          </Column>
          <S.Vertical />
          <Column gap={4} alignItems="center">
            <Row gap={3.6}>
              <TextInputIcon />
              <S.ContentText>제목</S.ContentText>
            </Row>
            <S.LargeContentInputBox
              placeholder="제목 작성..."
            />
            <S.Horizontal />
            <Row gap={3.6}>
              <ShopIcon />
              <S.ContentText>태그</S.ContentText>
            </Row>
            <Column gap={2.4}>
              <S.Keyword
                onClick={() => setTag(1)}
              >
                <HeartArrowIcon width={3} height={3} />
                로맨스 / 감성
                {tag === 1 && <S.Selected />}
              </S.Keyword>
              <S.Keyword
                onClick={() => setTag(2)}
              >
                <MagicStickIcon width={3} height={3} />
                판타지 / 이세계
                {tag === 2 && <S.Selected />}
              </S.Keyword>
              <S.Keyword
                onClick={() => setTag(3)}
              >
                <CoffeeIcon width={3} height={3} />
                일상 / 코미디
                {tag === 3 && <S.Selected />}
              </S.Keyword>
              <S.Keyword
                onClick={() => setTag(4)}
              >
                <ScaryFaceIcon width={3} height={3} />
                스릴러 / 호러
                {tag === 4 && <S.Selected />}
              </S.Keyword>
              <S.Keyword
                onClick={() => setTag(5)}
              >
                <CopyIcon width={3} height={3} />
                장편 / 시리즈
                {tag === 5 && <S.Selected />}
              </S.Keyword>
              <S.Keyword
                onClick={() => setTag(6)}
              >
                <MoreIcon width={3} height={3} />
                그 외
                {tag === 6 && <S.Selected />}
              </S.Keyword>
            </Column>
          </Column>
        </S.ContentBox>
        <S.WriteButton>
          <UploadIcon width={4} height={4} />
        </S.WriteButton>
      </Row>
    </>
  );
};

export default ViewPage;
