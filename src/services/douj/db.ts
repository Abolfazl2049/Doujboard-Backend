import sequelize from "#src/tools/sequelize.js";
import {DataTypes} from "sequelize";

const Douj = sequelize.define("Douj", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  img: DataTypes.STRING,
  title: DataTypes.STRING,
  description: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  hidden: DataTypes.BOOLEAN
});

const Category = sequelize.define("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  user: DataTypes.INTEGER
});

export default {
  Douj,
  Category
};
