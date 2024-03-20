import { atom } from "recoil";

export const CommentModalStateAtom = atom({
  key: "loginModalStateAtom",
  default: {
    show: false,
    animationState: false,
  },
});
