import config from "../config/config";
import { Sequelize } from "sequelize";

const db = {};
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);

db.sequelize = sequelize;

module.exports = db;

export default db;
