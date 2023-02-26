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
  getCommentByFeedbackId: async (req: Request, res: Response) => {
    const { feedbackId: id } = req.params;
    try {
      const commentQueryResult: QueryResult = await pool.query(
        `SELECT CM.ID,
          CM.CONTENT,
          U.NAME AS "authorName",
          U.USERNAME AS "authorUsername",
          U.IMAGE AS "authorImage"
        FROM COMMENTS CM
        LEFT JOIN USERS U ON CM.USER = U.ID
        WHERE "parentFeedback" = $1`,
        [id]
      );
      const comments = commentQueryResult.rows;

      const repliesQueryResult: QueryResult = await pool.query(
        `SELECT RP.ID,
          RP.CONTENT,
          "rp"."parentComment",
          "rp"."replyingTo",
          RP.USER,
                  U.NAME AS "authorName",
                  U.USERNAME AS "authorUsername",
                  U.IMAGE AS "authorImage",
          RPU.NAME AS "replyingToName",
          RPU.USERNAME AS "replyingToUsername",
          RPU.IMAGE AS "replyingToImage"
        FROM REPLIES RP
        LEFT JOIN COMMENTS CM ON CM.ID = "rp"."parentComment"
        LEFT JOIN USERS U ON RP.USER = U.ID
        LEFT JOIN USERS RPU ON "rp"."replyingTo" = RPU.ID
        WHERE "cm"."parentFeedback" = $1`,
        [id]
      );
      const replies = repliesQueryResult.rows;

      const allInteractions = comments.map((comment: any) => {
        const associatedReplies = replies.filter(
          (reply: any) => reply.parentComment === comment.id
        );
        if (associatedReplies.length) {
          return { ...comment, replies: associatedReplies };
        } else {
          return comment;
        }
      });

      res.status(200).json(allInteractions);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  addComment: async (req: Request, res: Response) => {
    const { content, user, parentFeedback } = req.body;
    const id = uuidv4();

    const userQuery = user
      ? 'select * from users where id = $1'
      : 'select * from users limit 1';

    const userQueryValues = user ? [user] : [];
    try {
      const userResult: QueryResult = await pool.query(
        userQuery,
        userQueryValues
      );
      const result: QueryResult = await pool.query(
        'INSERT INTO comments VALUES ($1, $2, $3, $4) RETURNING *',
        [id, content, userResult.rows[0].id, parentFeedback]
      );
      const designedResponse = {
        ...result.rows[0],
        authorName: userResult.rows[0].name,
        authorUsername: userResult.rows[0].username,
        authorImage: userResult.rows[0].image,
      };
      res.status(201).json([designedResponse]);
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
