import React, { useState } from "react";
import * as S from "./style";
import UserDefualtIcon from "../../assets/images/UserDefaultIcon";
import { Column, Row } from "../../styles/ui";

const UserPage = () => {
  const [pageType, usePageType] = useState<boolean[]>([true, false, false]);

  const PageNation = (id: number) => {
    let newPageType = [false, false, false];
    newPageType[id] = true;
    usePageType(newPageType);
  };

  return (
    <>
      <S.UserPageBox>
        <Row gap="8">
          <UserDefualtIcon />
          <Column justifyContent="space-between">
            <S.NickNameText>마동현석우</S.NickNameText>
            <S.UserProfileText>소설 [n]개</S.UserProfileText>
            <S.UserProfileText>조회수 [n]회 ‧ 좋아요 [n]개</S.UserProfileText>
          </Column>
        </Row>
      </S.UserPageBox>
      <S.ChooseInfomation>
        <div className="ml-20 mt-8">
          <Row gap={4}>
            <S.InfoItem
              type={pageType[0]}
              onClick={() => {
                PageNation(0);
              }}
            >
              내 정보
            </S.InfoItem>
            <S.InfoItem
              type={pageType[1]}
              onClick={() => {
                PageNation(1);
              }}
            >
              내 소설
            </S.InfoItem>
            <S.InfoItem
              type={pageType[2]}
              onClick={() => {
                PageNation(2);
              }}
            >
              좋아요한 소설
            </S.InfoItem>
          </Row>
        </div>

        <S.HerfChildLine />
      </S.ChooseInfomation>
    </>
  );
};

export default UserPage;
