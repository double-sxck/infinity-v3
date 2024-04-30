import { atom } from "recoil";

export const CommentModalStateAtom = atom({
  key: "CommentModalStateAtom",
  default: {
    show: false,
    animationState: false,
    id: 0,
  },
});
