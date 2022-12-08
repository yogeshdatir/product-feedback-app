import express from "express";

import statusController from "../controllers/statusController";

const { getAllStatus, addStatus, updateStatus, deleteStatus } =
  statusController;

const statusRouter = express.Router();

statusRouter
  .get("/", getAllStatus)
  .post("/", addStatus)
  .put("/", updateStatus)
  .delete("/", deleteStatus);

export default statusRouter;
