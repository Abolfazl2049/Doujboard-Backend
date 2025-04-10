import sequelize from "#src/tools/sequelize.js";
import {DataTypes} from "sequelize";
import authDb from "#services/auth/db.js";

const Category = sequelize.define("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  user: DataTypes.INTEGER
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
    type: DataTypes.INTEGER
  },
  img: DataTypes.STRING,
  title: DataTypes.STRING,
  description: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  hidden: DataTypes.BOOLEAN,
  category: DataTypes.INTEGER
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
