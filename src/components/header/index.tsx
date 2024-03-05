import React from "react";
import * as S from "./style";
import {
  LogoTextIcon,
  PencilIcon,
  ReadingGlassIcon,
  UserIcon,
} from "../../assets";
import { Row } from "../../styles/ui";

const HeaderBar = () => {
  return (
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
      </Row>
    </S.Header>
  );
};

export default HeaderBar;
