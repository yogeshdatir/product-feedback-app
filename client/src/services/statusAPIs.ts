import AxiosCommon from "./AxiosCommon";

export const getAllStatus = () => {
  return AxiosCommon.get("status");
};
