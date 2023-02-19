import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../app';
import { v4 as uuidv4 } from 'uuid';

const feedbackController = {
  getAllFeedbacks: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query(
        `SELECT F.ID,
            F.TITLE,
            F.DESCRIPTION,
            F.UPVOTES,
            S.NAME AS STATUS,
            CT.NAME AS CATEGORY,
            COALESCE(COUNT(RPCM.ID),
              0) AS COMMENTCOUNT,
            COALESCE(SUM(RPCM.RS),
              0) AS REPLIESCOUNT
          FROM FEEDBACKS F
          LEFT JOIN STATUS S ON F.STATUS = S.ID
          LEFT JOIN CATEGORIES CT ON F.CATEGORY = CT.ID
          LEFT JOIN
            (SELECT CM.ID,
                "cm"."parentFeedback",
                COUNT(RP.ID) AS RS
              FROM COMMENTS CM
              LEFT JOIN REPLIES RP ON "rp"."parentComment" = CM.ID
              GROUP BY CM.ID) RPCM ON "rpcm"."parentFeedback" = F.ID
          GROUP BY F.ID,
            S.ID,
            CT.ID`
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  getFeedbackById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result: QueryResult = await pool.query(
        'select f.id, f.title, f.description, f.upvotes, s.name as status, c.name as category from feedbacks as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id where f.id = $1',
        [id]
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  addFeedback: async (req: Request, res: Response) => {
    const { title, description, category, status, upvotes } = req.body;
    const defaultStatus = 'suggestion';
    const defaultUpvotes = 0;
    const id = uuidv4();
    const query =
      'WITH added_feedback AS (INSERT INTO feedbacks (id, title, description, upvotes, status, category) VALUES ($1, $2, $3, $4, (SELECT id FROM status where name = $5), (SELECT id FROM categories where name = $6)) RETURNING *) select f.id, f.title, f.description, f.upvotes, s.name as status, c.name as category from added_feedback as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id';
    try {
      const result: QueryResult = await pool.query(query, [
        id,
        title,
        description,
        upvotes || defaultUpvotes,
        status.toLowerCase() || defaultStatus,
        category.toLowerCase(),
      ]);
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  updateFeedback: async (req: Request, res: Response) => {
    const { id, title, description, status, category, upvotes } = req.body;
    const query =
      'WITH updated_feedback AS (UPDATE feedbacks SET title = $1, description = $2, upvotes = $3, status = (SELECT id FROM status where name = $4), category = (SELECT id FROM categories where name = $5) WHERE id = $6 RETURNING *) select f.id, f.title, f.description, f.upvotes, s.name as status, c.name as category from updated_feedback as f inner join status as s on f.status = s.id inner join categories as c on f.category = c.id';
    try {
      const result: QueryResult = await pool.query(query, [
        title,
        description,
        upvotes,
        status.toLowerCase(),
        category.toLowerCase(),
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  deleteFeedback: async (req: Request, res: Response) => {
    const { id } = req.body;
    const query = 'DELETE FROM feedbacks WHERE id = $1 RETURNING *';
    try {
      const result: QueryResult = await pool.query(query, [id]);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
};

export default feedbackController;
