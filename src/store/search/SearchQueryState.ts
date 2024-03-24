import { atom } from "recoil";

const searchQueryState = atom({
  key: "SearchQueryState",
  default: "",
});

export default searchQueryState;
