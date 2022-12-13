import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../app";
import { v4 as uuidv4 } from "uuid";

const categoryController = {
  getAllCategories: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query("select * from categories");
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  addCategory: async (req: Request, res: Response) => {
    const { categoryName } = req.body;
    const id = uuidv4();
    try {
      const result: QueryResult = await pool.query(
        "INSERT INTO categories VALUES ($1, $2) RETURNING *",
        [id, categoryName]
      );
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  updateCategory: async (req: Request, res: Response) => {
    const { id, categoryName } = req.body;
    const query = `UPDATE categories SET name = $1 WHERE id = $2 RETURNING *`;
    try {
      const result: QueryResult = await pool.query(query, [categoryName, id]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  deleteCategory: async (req: Request, res: Response) => {
    const { id, categoryName } = req.body;
    const query = id
      ? `DELETE FROM categories WHERE id=$1 RETURNING *`
      : `DELETE FROM categories WHERE name=$1 RETURNING *`;
    const queryArgs = id ? [id] : [categoryName];
    try {
      const result: QueryResult = await pool.query(query, queryArgs);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
};

export default categoryController;
