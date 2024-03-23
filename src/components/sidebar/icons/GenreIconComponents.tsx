import {
  BookIcon,
  CoffeeIcon,
  CopyIcon,
  HeartArrowIcon,
  HeartIcon,
  MagicStickIcon,
  MoreIcon,
  PencilIcon,
  ScaryFaceIcon,
  UserIcon,
} from "../../../assets";

export const GenreIconComponents = [
  { icon: <HeartArrowIcon />, text: "로맨스 / 감성" },
  { icon: <MagicStickIcon />, text: "판타지 / 이세계" },
  { icon: <CoffeeIcon />, text: "일상 / 코미디" },
  { icon: <ScaryFaceIcon />, text: "스릴러 / 호러" },
  { icon: <CopyIcon />, text: "장편 / 시리즈" },
  { icon: <MoreIcon />, text: "그 외" },
];

export const UserIconComponents = [
  { icon: <UserIcon />, text: "내 정보", function: "/profile" },
  { icon: <BookIcon />, text: "내 소설", function: "/profile" },
  { icon: <HeartIcon />, text: "좋아요한 소설", function: "/profile" },
  { icon: <PencilIcon />, text: "새 소설 쓰기", function: "/write" },
];
