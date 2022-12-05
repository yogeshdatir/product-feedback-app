import express from "express";
import feedbackRouter from "./routes/feedbackRoutes";
import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const DEV_DB_HOST: string = process.env.DEV_DB_HOST as string;
const DEV_DB_USERNAME: string = process.env.DEV_DB_USERNAME as string;
const DEV_DB_PORT: number = Number(process.env.DEV_DB_PORT);
const DEV_DB_PASSWORD: string = `${process.env.DEV_DB_PASSWORD}` || "";
const DEV_DB_NAME: string = process.env.DEV_DB_NAME as string;

export const pool = new Pool({
  host: DEV_DB_HOST,
  user: DEV_DB_USERNAME,
  port: DEV_DB_PORT,
  password: DEV_DB_PASSWORD,
  database: DEV_DB_NAME,
});

const app: express.Application = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/feedbacks", feedbackRouter);

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);
