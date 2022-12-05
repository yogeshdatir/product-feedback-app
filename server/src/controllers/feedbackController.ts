import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../app";

const feedbackController = {
  getAllFeedbacks: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query("select * from feedbacks");
      res.send({ data: result.rows, success: true });
    } catch (err) {}
  },
};

export default feedbackController;
