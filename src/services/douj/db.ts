import sequelize from "#src/tools/sequelize.js";
import {DataTypes} from "sequelize";
import authDb from "#services/auth/db.js";

const Category = sequelize.define("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user: DataTypes.INTEGER,
  name: DataTypes.STRING
});
authDb.User.hasMany(Category, {
  foreignKey: "user"
});
Category.belongsTo(authDb.User, {
  foreignKey: "user"
});

const Douj = sequelize.define("Douj", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  category: DataTypes.INTEGER,
  title: DataTypes.STRING,
  img: DataTypes.STRING,
  hidden: DataTypes.BOOLEAN,
  description: {
    allowNull: true,
    type: DataTypes.TEXT
  }
});
Category.hasMany(Douj, {
  foreignKey: "category"
});
Douj.belongsTo(Category, {
  foreignKey: "category"
});

export default {
  Douj,
  Category
};
