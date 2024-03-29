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
  ROMANCE: { icon: <HeartArrowIcon width={2.4} height={2.4} />, label: "로맨스 / 감성" },
  FANTASY: { icon: <MagicStickIcon width={2.4} height={2.4} />, label: "판타지 / 이세계" },
  DAILY: { icon: <CoffeeIcon width={2.4} height={2.4} />, label: "일상 / 코미디" },
  THRILLER: { icon: <ScaryFaceIcon width={2.4} height={2.4} />, label: "스릴러 / 호러" },
  FEATURE: { icon: <CopyIcon width={2.4} height={2.4} />, label: "장편 / 시리즈" },
  ETC: { icon: <MoreIcon width={2.4} height={2.4} />, label: "그 외" },
};

export default NovelType;

export const getDefaultNovelType = (): NovelTypeInfo => {
  return NovelType.ETC;
};
