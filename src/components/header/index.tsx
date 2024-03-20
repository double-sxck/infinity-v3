import React, { useLayoutEffect } from "react";
import * as S from "./style";
import {
  LogoTextIcon,
  PencilIcon,
  ReadingGlassIcon,
  UserIcon,
} from "../../assets";
import { Row } from "../../styles/ui";
import { useLoginModal } from "../../hooks/useLoginMdal"; // useLoginModal 임포트 위치 변경
import { useCommentModal } from "../../hooks/useCommentModal";

const HeaderBar = () => {
  const { openModal } = useLoginModal(); // useLoginModal 호출 위치 변경
  const { openCommentModal } = useCommentModal(); // useLoginModal

  return (
    <>
      <S.Header>
        <LogoTextIcon width={9.4} height={2.8} />
        <div onClick={openCommentModal}>임시버튼</div>
        <Row gap={0}>
          <S.InputBox placeholder="검색"></S.InputBox>
          <S.SearchStick>
            <ReadingGlassIcon />
          </S.SearchStick>
        </Row>
        <Row alignItems="center" justifyContent="center" gap={2.8}>
          {localStorage.getItem("refresh-token") ? (
            <>
              <S.UserProfileBox>
                <PencilIcon />
              </S.UserProfileBox>
              <S.UserProfileBox>
                <UserIcon />
              </S.UserProfileBox>
            </>
          ) : (
            <S.LoginButton onClick={openModal}>
              <UserIcon width={2.4} height={2.4} />
              <S.LoginText>로그인</S.LoginText>
            </S.LoginButton>
          )}
        </Row>
      </S.Header>
    </>
  );
};

export default HeaderBar;
