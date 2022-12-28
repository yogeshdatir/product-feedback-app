import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../app";
import { v4 as uuidv4 } from "uuid";

const feedbackController = {
  getAllFeedbacks: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query("select * from feedbacks");
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  getFeedback: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const result: QueryResult = await pool.query(
        "select * from feedbacks where id = $1",
        [id]
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  addFeedback: async (req: Request, res: Response) => {
    const { title, description, category, status } = req.body;
    const defaultStatus = "suggestion";
    const id = uuidv4();
    const query =
      "INSERT INTO feedbacks VALUES ($1, $2, $3, (SELECT id FROM status where name = $4), (SELECT id FROM categories where name = $5)) RETURNING *";
    try {
      const result: QueryResult = await pool.query(query, [
        id,
        title,
        description,
        status || defaultStatus,
        category,
      ]);
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  updateFeedback: async (req: Request, res: Response) => {
    const { id, title, description, status, category } = req.body;
    const query =
      "UPDATE feedbacks SET title = $1, description = $2, status = (SELECT id FROM status where name = $3), category = (SELECT id FROM categories where name = $4) WHERE id = $5 RETURNING *";
    try {
      const result: QueryResult = await pool.query(query, [
        title,
        description,
        status,
        category,
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  deleteFeedback: async (req: Request, res: Response) => {
    const { id } = req.body;
    const query = "DELETE FROM feedbacks WHERE id = $1 RETURNING *";
    try {
      const result: QueryResult = await pool.query(query, [id]);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
};

export default feedbackController;
