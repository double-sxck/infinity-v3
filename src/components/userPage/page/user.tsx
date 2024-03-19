import React from "react";
import * as S from "./style";
import { Column } from "../../../styles/ui";

const UserContents = () => {
  return (
    <>
      <div className="ml-20 mt-16">
        <S.MainText>계정 정보</S.MainText>
        <div className="pl-8 mt-16">
          <Column gap={2.5}>
            <S.MainContent>아이디 : [아이디]</S.MainContent>
            <S.MainContent>비밀번호 : ******</S.MainContent>
            <S.MainContent>닉네임 : [닉네임]</S.MainContent>
          </Column>
        </div>
      </div>
      <S.HerfLine />
      <div className="ml-20 mt-16">
        <S.MainText>계정 관리</S.MainText>
        <div className="pl-8 mt-16">
          <Column gap={2.5}>
            <S.MainContent>내 소설 모두 삭제</S.MainContent>
            <S.MainContent>로그아웃</S.MainContent>
            <S.DeleteButton>회원 탈퇴</S.DeleteButton>
          </Column>
        </div>
      </div>
      <S.HerfLine />
    </>
  );
};

export default UserContents;
