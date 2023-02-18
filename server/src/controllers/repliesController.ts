import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../app';
import { v4 as uuidv4 } from 'uuid';

const repliesController = {
  getAllReplies: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query('select * from replies');
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  getReplyById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result: QueryResult = await pool.query(
        'select * from replies where id = $1',
        [id]
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  addReply: async (req: Request, res: Response) => {
    const { content, user, parentComment, replyingTo } = req.body;
    const id = uuidv4();
    try {
      const result: QueryResult = await pool.query(
        'INSERT INTO replies VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, content, replyingTo, user, parentComment]
      );
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  updateReply: async (req: Request, res: Response) => {
    const { id, content, replyingTo } = req.body;

    const query = `UPDATE replies SET content = $1, "replyingTo" = $2 WHERE id = $3 RETURNING *`;
    try {
      const result: QueryResult = await pool.query(query, [
        content,
        replyingTo,
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  deleteReply: async (req: Request, res: Response) => {
    const { id } = req.body;

    const query = `DELETE FROM replies WHERE id=$1 RETURNING *`;
    const queryArgs = [id];

    try {
      const result: QueryResult = await pool.query(query, queryArgs);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
};

export default repliesController;
