import TOKEN from "../../constants/token.constants";
import {Storage} from "../../storage/token/index"

export const Authorization = () => {
  return {
    headers: {
      Authorization: Storage.getItem(TOKEN.ACCESS),
    },
  };
};
