import express from "express";

import categoryController from "../controllers/categoryController";

const { getAllCategories, addCategory, updateCategory, deleteCategory } =
  categoryController;

const categoryRouter = express.Router();

categoryRouter
  .get("/", getAllCategories)
  .post("/", addCategory)
  .put("/", updateCategory)
  .delete("/", deleteCategory);

export default categoryRouter;
