import { NavigateFunction } from "react-router";

export const goBack = (navigate: NavigateFunction) => {
  navigate(-1);
};
