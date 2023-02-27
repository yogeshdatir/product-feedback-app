import {
  IFeedback,
  IFeedbackFormState,
  ICommentFormState,
} from "../utils/types";
import AxiosCommon from "./AxiosCommon";

export const getAllFeedbacks = async () => AxiosCommon.get("feedbacks");

export const addFeedback = async (data: IFeedbackFormState) =>
  AxiosCommon.post("feedbacks", data);

export const getFeedback = async (id: IFeedback["id"]) =>
  AxiosCommon.get(`feedbacks/${id}`);

export const updateFeedback = async (data: IFeedbackFormState) =>
  AxiosCommon.put("feedbacks", data);

export const deleteFeedback = async (id: IFeedback["id"]) =>
  AxiosCommon.delete("feedbacks", { data: { id } });

export const getCommentsForFeedback = async (feedbackId: IFeedback["id"]) =>
  AxiosCommon.get(`comments/feedback/${feedbackId}`);

export const addCommentForFeedback = async (data: ICommentFormState) =>
  AxiosCommon.post("comments", data);

export const addReply = async (data: any) => AxiosCommon.post("replies", data);
