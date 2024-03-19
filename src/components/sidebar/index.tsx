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

const userIconComponents = [
  { icon: <UserIcon />, text: "내 정보" },
  { icon: <BookIcon />, text: "내 소설" },
  { icon: <HeartIcon />, text: "좋아요한 소설" },
  { icon: <PencilIcon />, text: "새 소설 쓰기" },
];

const genreIconComponents = [
  { icon: <HeartArrowIcon />, text: "로맨스 / 감성" },
  { icon: <MagicStickIcon />, text: "판타지 / 이세계" },
  { icon: <CoffeeIcon />, text: "일상 / 코미디" },
  { icon: <ScaryFaceIcon />, text: "스릴러 / 호러" },
  { icon: <CopyIcon />, text: "장편 / 시리즈" },
  { icon: <MoreIcon />, text: "그 외" },
];

const Sidebar = () => {
  return (
    <S.SidebarBox>
      <S.Between>
        <Column gap={2.6}>
          <ItemBox>
            <HomeIcon />
            <S.SidebarText>홈</S.SidebarText>
          </ItemBox>
          <S.SidebarContour />
          <S.Subtitle>나</S.Subtitle>
          {userIconComponents.map((item, index) => (
            <ItemBox key={index}>
              {item.icon}
              <S.SidebarText>{item.text}</S.SidebarText>
            </ItemBox>
          ))}
          <S.SidebarContour />
          <S.Subtitle>탐색</S.Subtitle>
          {genreIconComponents.map((item, index) => (
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
