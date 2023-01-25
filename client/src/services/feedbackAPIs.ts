import { IFeedback, IFeedbackFormState } from "../utils/types";
import AxiosCommon from "./AxiosCommon";

export const getAllFeedbacks = () => {
  return AxiosCommon.get("feedbacks");
};

export const addFeedback = (data: IFeedbackFormState) => {
  return AxiosCommon.post("feedbacks", data);
};

export const getFeedback = (id: IFeedback["id"]) => {
  return AxiosCommon.get(`feedbacks/${id}`);
};

export const updateFeedback = (data: IFeedbackFormState) => {
  return AxiosCommon.put("feedbacks", data);
};

export const deleteFeedback = (id: IFeedback["id"]) => {
  return AxiosCommon.delete("feedbacks", { data: { id } });
};
