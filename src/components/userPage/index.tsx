import React from "react";
import * as S from "./style";
import UserDefualtIcon from "../../assets/images/UserDefaultIcon";
import { Column, Row } from "../../styles/ui";

const UserPage = () => {
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
        <div className="ml-16">
          {" "}
          {/* 16rem의 마진을 추가하고자 한다면 64px의 마진입니다. */}
          <Row gap={4}>
            <S.InfoItem>내 정보</S.InfoItem>
            <S.InfoItem>내 소설</S.InfoItem>
            <S.InfoItem>좋아요한 소설</S.InfoItem>
          </Row>
        </div>

        <S.HerfChildLine />
      </S.ChooseInfomation>
    </>
  );
};

export default UserPage;
