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
import { Culumn } from "../../styles/ui";
import Column from "../../styles/ui/flex/column";
import * as S from "./style";
import React from "react";

const Sidebar = () => {
  return (
    <S.SidebarBox>
      <Column>
        <HomeIcon />
        <UserIcon />
        <BookIcon />
        <HeartIcon />
        <PencilIcon />
        <HeartArrowIcon />
        <MagicStickIcon />
        <CoffeeIcon />
        <ScaryFaceIcon />
        <CopyIcon />
        <MoreIcon />
      </Column>
    </S.SidebarBox>
  );
};

export default Sidebar;
