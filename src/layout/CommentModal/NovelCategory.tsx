import {
  CoffeeIcon,
  CopyIcon,
  HeartArrowIcon,
  MagicStickIcon,
  MoreIcon,
  ScaryFaceIcon,
} from "../../assets";

interface NovelTypeInfo {
  icon: JSX.Element;
  label: string;
}

interface NovelType {
  [key: string]: NovelTypeInfo;
}

const NovelType: NovelType = {
  ROMANCE: { icon: <HeartArrowIcon />, label: "로멘스/감성" },
  FANTASY: { icon: <MagicStickIcon />, label: "판타지/이세계" },
  DAILY: { icon: <CoffeeIcon />, label: "일상/코미디" },
  THRILLER: { icon: <ScaryFaceIcon />, label: "스릴러/호러" },
  FEATURE: { icon: <CopyIcon />, label: "장편/시리즈" },
  ETC: { icon: <MoreIcon />, label: "그 외" },
};

export default NovelType;

export const getDefaultNovelType = (): NovelTypeInfo => {
  return NovelType.ETC;
};
