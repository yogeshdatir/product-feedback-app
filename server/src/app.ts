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
