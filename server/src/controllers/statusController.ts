import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../app";
import { v4 as uuidv4 } from "uuid";

const statusController = {
  getAllStatus: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query("select * from status");
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  addStatus: async (req: Request, res: Response) => {
    const { statusName } = req.body;
    const id = uuidv4();
    try {
      const result: QueryResult = await pool.query(
        "INSERT INTO status VALUES ($1, $2) RETURNING *",
        [id, statusName]
      );
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  updateStatus: async (req: Request, res: Response) => {
    const { id, name, description } = req.body;
    const query = `UPDATE status SET name = $1, description = $2 WHERE id = $3 RETURNING *`;
    try {
      const result: QueryResult = await pool.query(query, [
        name,
        description,
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
  deleteStatus: async (req: Request, res: Response) => {
    const { id, statusName } = req.body;
    const query = id
      ? `DELETE FROM status WHERE id=$1 RETURNING *`
      : `DELETE FROM status WHERE name=$1 RETURNING *`;
    const queryArgs = id ? [id] : [statusName];
    try {
      const result: QueryResult = await pool.query(query, queryArgs);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: "something went wrong..." });
    }
  },
};

export default statusController;
