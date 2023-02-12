import AxiosCommon from "./AxiosCommon";

export const getAllCategories = async () => AxiosCommon.get("categories");
