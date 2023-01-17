import { IFeedback, INewFeedback } from "../utils/types";
import AxiosCommon from "./AxiosCommon";

export const getAllFeedbacks = () => {
  return AxiosCommon.get("feedbacks");
};

export const addFeedback = (data: INewFeedback) => {
  return AxiosCommon.post("feedbacks", data);
};

export const getFeedback = (id: IFeedback["id"]) => {
  return AxiosCommon.get(`feedbacks/${id}`);
};

export const updateFeedback = (data: INewFeedback) => {
  return AxiosCommon.put("feedbacks", data);
};

export const deleteFeedback = (id: IFeedback["id"]) => {
  return AxiosCommon.delete("feedbacks", { data: { id } });
};
