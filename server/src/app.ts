import express from 'express';
import feedbackRouter from './routes/feedbackRoutes';
import * as dotenv from 'dotenv';
import { Pool } from 'pg';
import statusRouter from './routes/statusRoutes';
import categoryRouter from './routes/categoryRoutes';
import cors from 'cors';
import userRouter from './routes/userRoutes';
import commentRouter from './routes/commentRoutes';
import replyRouter from './routes/replyRoutes';

dotenv.config();

const DEV_DB_HOST = process.env.DEV_DB_HOST;
const DEV_DB_USERNAME = process.env.DEV_DB_USERNAME;
const DEV_DB_PORT = Number(process.env.DEV_DB_PORT);
const DEV_DB_PASSWORD = process.env.DEV_DB_PASSWORD || '';
const DEV_DB_NAME = process.env.DEV_DB_NAME;

export const pool = new Pool({
  host: DEV_DB_HOST,
  user: DEV_DB_USERNAME,
  port: DEV_DB_PORT,
  password: DEV_DB_PASSWORD,
  database: DEV_DB_NAME,
});

const app: express.Application = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/feedbacks', feedbackRouter);
app.use('/status', statusRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/replies', replyRouter);

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);
