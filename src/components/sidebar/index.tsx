import { Link } from "react-router-dom";
import {
  BookIcon,
  CoffeeIcon,
  CopyIcon,
  HeartArrowIcon,
  HeartIcon,
  HomeIcon,
  LogoIcon,
  MagicStickIcon,
  MoreIcon,
  PencilIcon,
  ScaryFaceIcon,
  SmartLogoIcon,
  UserIcon,
} from "../../assets";
import { ItemBox, Row, Column } from "../../styles/ui";
import * as S from "./style";
import React from "react";
import { useLoginModal } from "../../hooks/useLoginMdal";
import {
  GenreIconComponents,
  UserIconComponents,
} from "./icons/GenreIconComponents";

const Sidebar = () => {
  const { openModal } = useLoginModal();

  return (
    <S.SidebarBox>
      <S.Between>
        <Column gap={2.6}>
<<<<<<< HEAD
          <ItemBox>
            <Link to="/">
              <HomeIcon />
              <S.SidebarText>홈</S.SidebarText>
            </Link>
          </ItemBox>
          <S.SidebarContour />
          <S.Subtitle>나</S.Subtitle>
          {userIconComponents.map((item, index) => (
            <ItemBox key={index}>
              {item.icon}
              <S.SidebarText>{item.text}</S.SidebarText>
=======
          <Link to="/">
            <ItemBox>
              <HomeIcon />
              <S.SidebarText>홈</S.SidebarText>
>>>>>>> 450b6de9f54140270447377d42dbef7abc08964f
            </ItemBox>
          </Link>
          <S.SidebarContour />
          {localStorage.getItem("refresh-token") ? (
            <>
              <S.Subtitle>나</S.Subtitle>
              {UserIconComponents.map((item, index) => (
                <Link to={item.function}>
                  <ItemBox key={index}>
                    {item.icon}
                    <S.SidebarText>{item.text}</S.SidebarText>
                  </ItemBox>
                </Link>
              ))}
            </>
          ) : (
            <>
              <p
                style={{
                  color: "#2c333e",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                }}
              >
                로그인하면 소설을 작성하거나 다른 사람의 소설에 반응을 남길 수
                있습니다.
              </p>
              <S.LoginButton onClick={openModal}>
                <UserIcon width={2.4} height={2.4} />
                <S.LoginText>로그인</S.LoginText>
              </S.LoginButton>
            </>
          )}
          <S.SidebarContour />
          <S.Subtitle>탐색</S.Subtitle>
          {GenreIconComponents.map((item, index) => (
            <ItemBox key={index}>
              {item.icon}
              <S.SidebarText>{item.text}</S.SidebarText>
            </ItemBox>
          ))}
        </Column>
        <Row gap={2} justifyContent="center" alignItems="center">
          <SmartLogoIcon />
          <S.SidebarVerticalLine />
          <LogoIcon />
        </Row>
      </S.Between>
    </S.SidebarBox>
  );
};

export default Sidebar;
