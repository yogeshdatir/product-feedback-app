import express from "express";
import feedbackController from "../controllers/feedbackController";

const { getAllFeedbacks, addFeedback, updateFeedback, deleteFeedback } =
  feedbackController;

const feedbackRouter = express.Router();

feedbackRouter
  .get("/", getAllFeedbacks)
  .post("/", addFeedback)
  .put("/", updateFeedback)
  .delete("/", deleteFeedback);

export default feedbackRouter;
