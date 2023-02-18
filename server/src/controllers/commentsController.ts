import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../app';
import { v4 as uuidv4 } from 'uuid';

const commentsController = {
  getAllComments: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query('select * from comments');
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  getCommentById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result: QueryResult = await pool.query(
        'select * from comments where id = $1',
        [id]
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  addComment: async (req: Request, res: Response) => {
    const { content, user, parentFeedback } = req.body;
    const id = uuidv4();
    try {
      const result: QueryResult = await pool.query(
        'INSERT INTO comments VALUES ($1, $2, $3, $4) RETURNING *',
        [id, content, user, parentFeedback]
      );
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  updateComment: async (req: Request, res: Response) => {
    const { id, content } = req.body;

    const query = `UPDATE comments SET content = $1 WHERE id = $2 RETURNING *`;
    try {
      const result: QueryResult = await pool.query(query, [content, id]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  deleteComment: async (req: Request, res: Response) => {
    const { id } = req.body;

    const query = `DELETE FROM comments WHERE id=$1 RETURNING *`;
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

export default commentsController;
