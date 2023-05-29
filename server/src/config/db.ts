import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const DEV_DB_HOST = process.env.DEV_DB_HOST;
const DEV_DB_USERNAME = process.env.DEV_DB_USERNAME;
const DEV_DB_PORT = Number(process.env.DEV_DB_PORT);
const DEV_DB_PASSWORD = process.env.DEV_DB_PASSWORD || '';
const DEV_DB_NAME = process.env.DEV_DB_NAME;

const { DATABASE_URL, NODE_ENV } = process.env;

export const pool =
  NODE_ENV === 'development'
    ? new Pool({
        host: DEV_DB_HOST,
        user: DEV_DB_USERNAME,
        port: DEV_DB_PORT,
        password: DEV_DB_PASSWORD,
        database: DEV_DB_NAME,
      })
    : new Pool({
        connectionString: DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      });

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT version()');
    console.log(res.rows[0]);
  } finally {
    client.release();
  }
}

getPostgresVersion();
