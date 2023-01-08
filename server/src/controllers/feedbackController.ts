import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../app";
import { v4 as uuidv4 } from "uuid";

const feedbackController = {
  getAllFeedbacks: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query(
        "select f.id, f.title, f.description, s.name as status, c.name as category from feedbacks as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id"
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  getFeedbackById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result: QueryResult = await pool.query(
        "select f.id, f.title, f.description, s.name as status, c.name as category from feedbacks as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id where f.id = $1",
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
      "WITH added_feedback AS (INSERT INTO feedbacks VALUES ($1, $2, $3, (SELECT id FROM status where name = $4), (SELECT id FROM categories where name = $5)) RETURNING *) select f.id, f.title, f.description, s.name as status, c.name as category from added_feedback as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id";
    try {
      const result: QueryResult = await pool.query(query, [
        id,
        title,
        description,
        status.toLowerCase() || defaultStatus,
        category.toLowerCase(),
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
      "WITH updated_feedback AS (UPDATE feedbacks SET title = $1, description = $2, status = (SELECT id FROM status where name = $3), category = (SELECT id FROM categories where name = $4) WHERE id = $5 RETURNING *) select f.id, f.title, f.description, s.name as status, c.name as category from updated_feedback as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id";
    try {
      const result: QueryResult = await pool.query(query, [
        title,
        description,
        status.toLowerCase(),
        category.toLowerCase(),
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
