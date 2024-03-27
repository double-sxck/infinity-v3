import React from "react";
import * as S from "./style";
import { Column } from "../../../styles/ui";

interface UserContentsProps {
  userid: string;
  nickname: string;
}

const UserContents: React.FC<UserContentsProps> = ({ userid, nickname }) => {
  return (
    <>
      <div className="ml-20 mt-16">
        <S.MainText>계정 정보</S.MainText>
        <div className="pl-8 mt-16">
          <Column gap={2.5}>
            <S.MainContent>아이디 : {userid}</S.MainContent>
            <S.MainContent>비밀번호 : ******</S.MainContent>
            <S.MainContent>닉네임 : {nickname}</S.MainContent>
          </Column>
        </div>
      </div>
      <S.HerfLine />
      <div className="ml-20 mt-16">
        <S.MainText>계정 관리</S.MainText>
        <div className="pl-8 mt-16">
          <Column gap={2.5}>
            <S.MainContent2>내 소설 모두 삭제</S.MainContent2>
            <S.MainContent2
              onClick={() => {
                localStorage.removeItem("refresh-token");
                window.location.href="/";
              }}
            >로그아웃</S.MainContent2>
            <S.DeleteButton>회원 탈퇴</S.DeleteButton>
          </Column>
        </div>
      </div>
      <S.HerfLine />
    </>
  );
};

export default UserContents;
