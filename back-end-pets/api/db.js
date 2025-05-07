import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const dataBase = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});