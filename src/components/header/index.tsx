import { useState } from "react";
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
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const { openModal } = useLoginModal(); // useLoginModal 호출 위치 변경
  const [profile, setProfile] = useState<string>('false');
  const [searchValue, setSearchValue] = useState<string>("");

  const forURL = (value: string) => {
    return encodeURIComponent(value);
  };

  return (
    <>
      <S.Header id="header" type={profile}>
        <Link to="/" onClick={() => setProfile('false')}>
          <LogoTextIcon width={12} height={4} />
        </Link>
        <Row gap={0}>
          <S.InputBox
            placeholder="검색"
            value={searchValue}
            onChange={(e: any) => {
              setSearchValue(e.currentTarget.value);
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                setProfile('false');
                if(searchValue !== "") window.location.href = `/search/${forURL(searchValue)}`;
              }
            }}
          ></S.InputBox>
          <Link
            to={searchValue !== "" ? `/search/${forURL(searchValue)}` : "/"}
            onClick={() => {
              setProfile('false');
            }}
          >
            <S.SearchStick>
              <ReadingGlassIcon />
            </S.SearchStick>
          </Link>
        </Row>
        <Row alignItems="center" justifyContent="center" gap={2.8}>
          {localStorage.getItem("refresh-token") ? (
            <>
              <Link to="/write" onClick={() => setProfile('false')}>
                <S.UserProfileBox>
                  <PencilIcon />
                </S.UserProfileBox>
              </Link>
              <Column justifyContent="center" alignItems="center">
                <S.UserProfileBox
                  onClick={() => {
                    setProfile(bf => bf === 'false' ? 'true' : 'false');
                  }}
                >
                  <UserIcon />
                </S.UserProfileBox>
                {profile === 'true' && (
                  <S.ProfileClickBox>
                    <Link to="/profile/info" onClick={() => setProfile('false')}>
                      {/* Link 컴포넌트로 감싸서 클릭 시 /profile 로 이동하도록 함 */}
                      <Row gap={1} alignItems="center">
                        <UserIcon width={2.4} height={2.4} />
                        <S.ProfileBoxText>내 정보</S.ProfileBoxText>
                      </Row>
                    </Link>
                    <S.ProfileLine />
                    <div
                      onClick={() => {
                        // console.log("로그아웃");
                        localStorage.removeItem("refresh-token");
                        window.location.href="/";
                      }}
                    >
                      <Row gap={1} alignItems="center">
                        <LogoutButtonIcon width={2.4} height={2.4} />
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
