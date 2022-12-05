import express from "express";
import feedbackControllers from "../controllers/feedbackController";

const { getAllFeedbacks } = feedbackControllers;

const feedbackRouter = express.Router();

feedbackRouter.get("/", getAllFeedbacks);

export default feedbackRouter;
