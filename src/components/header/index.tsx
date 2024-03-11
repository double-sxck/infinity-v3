import React from "react";
import * as S from "./style";
import {
  LogoTextIcon,
  PencilIcon,
  ReadingGlassIcon,
  UserIcon,
} from "../../assets";
import { Row } from "../../styles/ui";
import { useLoginModal } from "../../hooks/useLoginMdal"; // useLoginModal 임포트 위치 변경
import LoginModal from "../../layout/login";

const HeaderBar = () => {
  const { openModal, modalState } = useLoginModal(); // useLoginModal 호출 위치 변경

  return (
    <>
      {modalState.show && <LoginModal />}
      <S.Header>
        <LogoTextIcon width={116} height={32} />
        <Row gap={0}>
          <S.InputBox placeholder="검색"></S.InputBox>
          <S.SearchStick>
            <ReadingGlassIcon />
          </S.SearchStick>
        </Row>
        <Row alignItems="center" justifyContent="center" gap={2.8}>
          <S.UserProfileBox>
            <PencilIcon />
          </S.UserProfileBox>
          <S.UserProfileBox>
            <UserIcon />
          </S.UserProfileBox>
          <div onClick={openModal}>로그인</div>
        </Row>
      </S.Header>
    </>
  );
};

export default HeaderBar;
