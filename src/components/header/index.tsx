import React, { useLayoutEffect, useState } from "react";
import * as S from "./style";
import {
  LogoTextIcon,
  LogoutButtonIcon,
  PencilIcon,
  ReadingGlassIcon,
  UserIcon,
} from "../../assets";
import { Column, Row } from "../../styles/ui";
import { useLoginModal } from "../../hooks/useLoginMdal"; // useLoginModal 임포트 위치 변경
import { useCommentModal } from "../../hooks/useCommentModal";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const { openModal } = useLoginModal(); // useLoginModal 호출 위치 변경
  const [profile, setProfile] = useState<boolean>(false);

  return (
    <>
      <S.Header type={profile}>
        <Link to="/">
          <LogoTextIcon width={12} height={4} />
        </Link>
        <Row gap={0}>
          <S.InputBox placeholder="검색"></S.InputBox>
          <S.SearchStick>
            <ReadingGlassIcon />
          </S.SearchStick>
        </Row>
        <Row alignItems="center" justifyContent="center" gap={2.8}>
          {localStorage.getItem("refresh-token") ? (
            <>
              <Link to="/write">
                <S.UserProfileBox>
                  <PencilIcon />
                </S.UserProfileBox>
              </Link>
              <Column justifyContent="center" alignItems="center">
                <S.UserProfileBox
                  onClick={() => {
                    setProfile(!profile);
                  }}
                >
                  <UserIcon />
                </S.UserProfileBox>
                {profile && (
                  <S.ProfileClickBox>
                    <Link to="/profile">
                      {" "}
                      {/* Link 컴포넌트로 감싸서 클릭 시 /profile 로 이동하도록 함 */}
                      <Row justifyContent="center " alignItems="center">
                        <UserIcon />
                        <S.ProfileBoxText>내 정보</S.ProfileBoxText>
                      </Row>
                    </Link>
                    <S.ProfileLine />
                    <div
                      onClick={() => {
                        console.log("로그아웃");
                        localStorage.removeItem("refresh-token");
                        window.location.reload();
                      }}
                    >
                      <Row>
                        <LogoutButtonIcon
                          onClick={() => {
                            console.log("로그아웃");
                            localStorage.removeItem("refresh-token");
                            window.location.reload();
                          }}
                        />
                        <S.ProfileBoxText>로그아웃</S.ProfileBoxText>
                      </Row>
                    </div>
                  </S.ProfileClickBox>
                )}
              </Column>
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
