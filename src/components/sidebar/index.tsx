import {
  BookIcon,
  CoffeeIcon,
  CopyIcon,
  HeartArrowIcon,
  HeartIcon,
  HomeIcon,
  MagicStickIcon,
  MoreIcon,
  PencilIcon,
  ScaryFaceIcon,
  UserIcon,
} from "../../assets";
import { Culumn, Row } from "../../styles/ui";
import Column from "../../styles/ui/flex/column";
import * as S from "./style";
import React from "react";

const Sidebar = () => {
  return (
    <S.SidebarBox>
      <Column>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <HomeIcon />
          <S.SidebarText>홈</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <UserIcon />
          <S.SidebarText>사용자</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <BookIcon />
          <S.SidebarText>책</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <HeartIcon />
          <S.SidebarText>하트</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <PencilIcon />
          <S.SidebarText>연필</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <HeartArrowIcon />
          <S.SidebarText>하트 화살표</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <MagicStickIcon />
          <S.SidebarText>마술봉</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <CoffeeIcon />
          <S.SidebarText>커피</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <ScaryFaceIcon />
          <S.SidebarText>무서운 얼굴</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <CopyIcon />
          <S.SidebarText>복사</S.SidebarText>
        </Row>
        <Row justifyContent="start" alignItems="center" gap={2.5}>
          <MoreIcon />
          <S.SidebarText>더보기</S.SidebarText>
        </Row>
      </Column>
    </S.SidebarBox>
  );
};

export default Sidebar;
