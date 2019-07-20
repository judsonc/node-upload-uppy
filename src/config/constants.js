import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

if (!process.env.APP_NAME) {
  throw new Error('Check the environment variables!');
}

const { env } = process;
const dialect = 'postgres';

export const development = {
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  dialect,
};

export const production = {
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  dialect,
};

export const test = {
  username: env.POSTGRES_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DATABASE,
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  dialect,
};
