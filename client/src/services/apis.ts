import AxiosCommon from "./AxiosCommon";

export const getAllFeedbacks = () => {
  return AxiosCommon.get("feedbacks");
};
