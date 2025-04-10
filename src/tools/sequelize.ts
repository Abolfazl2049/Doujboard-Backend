import path from "path";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve("data/app.db"),
  logging: false
});
export default sequelize;
