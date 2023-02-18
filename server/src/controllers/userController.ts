import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../app';
import { v4 as uuidv4 } from 'uuid';

const userController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const result: QueryResult = await pool.query('select * from users');
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result: QueryResult = await pool.query(
        'select * from users where id = $1',
        [id]
      );
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  addUser: async (req: Request, res: Response) => {
    const { name, username, image } = req.body;
    const id = uuidv4();
    try {
      const result: QueryResult = await pool.query(
        'INSERT INTO users VALUES ($1, $2, $3, $4) RETURNING *',
        [id, name, username, image]
      );
      res.status(201).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    const { id, name, username, image } = req.body;

    const query = `UPDATE users SET name = $1, username = $2, image = $3 WHERE id = $4 RETURNING *`;
    try {
      const result: QueryResult = await pool.query(query, [
        name,
        username,
        image,
        id,
      ]);
      res.status(200).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
  deleteUser: async (req: Request, res: Response) => {
    const { id, username } = req.body;

    const query = id
      ? `DELETE FROM users WHERE id=$1 RETURNING *`
      : `DELETE FROM users WHERE username=$1 RETURNING *`;
    const queryArgs = id ? [id] : [username];

    try {
      const result: QueryResult = await pool.query(query, queryArgs);
      res.status(202).json(result.rows);
    } catch (err: any) {
      console.log(err.stack, err.code);
      res.status(500).json({ error: 'something went wrong...' });
    }
  },
};

export default userController;
