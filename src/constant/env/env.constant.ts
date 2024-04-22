import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  DATABASE: process.env.DATABASE_URL,
};
