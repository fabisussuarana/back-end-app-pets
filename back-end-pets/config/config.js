import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    host: process.env.DB_HOST,
    dialect: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    define: {
      timestamps: true,
    },
  },
};
