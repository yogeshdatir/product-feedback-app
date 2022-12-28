import express from "express";
import feedbackController from "../controllers/feedbackController";

const {
  getAllFeedbacks,
  getFeedbackById,
  addFeedback,
  updateFeedback,
  deleteFeedback,
} = feedbackController;

const feedbackRouter = express.Router();

feedbackRouter
  .get("/", getAllFeedbacks)
  .post("/", addFeedback)
  .put("/", updateFeedback)
  .delete("/", deleteFeedback);

feedbackRouter.get("/:id", getFeedbackById);

export default feedbackRouter;
