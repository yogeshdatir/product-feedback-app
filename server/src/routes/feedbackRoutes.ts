import express from "express";
import feedbackController from "../controllers/feedbackController";

const { getAllFeedbacks } = feedbackController;

const feedbackRouter = express.Router();

feedbackRouter.get("/", getAllFeedbacks);

export default feedbackRouter;
