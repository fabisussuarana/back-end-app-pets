import { Sequelize } from "sequelize";
import config from "./index.js";

const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    define: dbConfig.define,
  },
);

export default sequelize;
