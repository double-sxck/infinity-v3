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
  { icon: <HeartArrowIcon />, text: "로맨스 / 감성", type: "ROMANCE" },
  { icon: <MagicStickIcon />, text: "판타지 / 이세계", type: "FANTASY" },
  { icon: <CoffeeIcon />, text: "일상 / 코미디", type: "DAILY" },
  { icon: <ScaryFaceIcon />, text: "스릴러 / 호러", type: "THRILLER" },
  { icon: <CopyIcon />, text: "장편 / 시리즈", type: "FEATURE" },
  { icon: <MoreIcon />, text: "그 외", type: "ETC" },
];

export const UserIconComponents = [
  { icon: <UserIcon width={2.0} height={2.0} />, text: "내 정보", function: "/profile/info" },
  { icon: <BookIcon />, text: "내 소설", function: "/profile/novel" },
  { icon: <HeartIcon />, text: "좋아요한 소설", function: "/profile/like" },
  { icon: <PencilIcon />, text: "새 소설 쓰기", function: "/write" },
];
