import { atom } from "recoil";

export const loginModalStateAtom = atom({
  key: "loginModalStateAtom",
  default: {
    show: false,
    animationState: false,
  },
});
