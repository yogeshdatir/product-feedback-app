import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../config/db';
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

    const userQuery = 'select * from users where id = $1 or id = $2';

    const userQueryValues = [user, replyingTo];
    try {
      const userResult: QueryResult = await pool.query(
        userQuery,
        userQueryValues
      );
      const result: QueryResult = await pool.query(
        'INSERT INTO replies VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, content, replyingTo, user, parentComment]
      );
      let designedResponse = {
        ...result.rows[0],
      };
      if (userResult.rows[0].id === user) {
        designedResponse = {
          ...designedResponse,
          authorUserId: userResult.rows[0].id,
          authorName: userResult.rows[0].name,
          authorUsername: userResult.rows[0].username,
          authorImage: userResult.rows[0].image,
          replyingToUserId: userResult.rows[1].id,
          replyingToName: userResult.rows[1].name,
          replyingToUsername: userResult.rows[1].username,
          replyingToImage: userResult.rows[1].image,
        };
      } else {
        designedResponse = {
          ...designedResponse,
          authorUserId: userResult.rows[1].id,
          authorName: userResult.rows[1].name,
          authorUsername: userResult.rows[1].username,
          authorImage: userResult.rows[1].image,
          replyingToUserId: userResult.rows[0].id,
          replyingToName: userResult.rows[0].name,
          replyingToUsername: userResult.rows[0].username,
          replyingToImage: userResult.rows[0].image,
        };
      }
      res.status(201).json([designedResponse]);
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
