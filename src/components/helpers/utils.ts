import { CoinType } from "../../../types";



export const _postToLocalStorage = (field: string, value: CoinType[]) => {
    try {
      localStorage.setItem(field, JSON.stringify(value));
    } catch (error) {}
  };



  export const _getFromLocalStorage = (field :string) => {
    try {
      return JSON.parse(localStorage.getItem(field));
    } catch (error) {
      return "";
    }
  };