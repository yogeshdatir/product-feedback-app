import AxiosCommon from "./AxiosCommon";

export const getAllCategories = () => {
  return AxiosCommon.get("categories");
};
