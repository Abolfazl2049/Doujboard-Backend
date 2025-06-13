import path from "path";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(process.env.ENVIRONMENT === "DEVELOPMENT" ? "data/app.db" : "app.db"),
  logging: false
});
export default sequelize;
