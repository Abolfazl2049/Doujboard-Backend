import sequelize from "#src/tools/sequelize.js";
import {DataTypes} from "sequelize";
import authDb from "#src/services/user/db.js";

const Category = sequelize.define("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user: DataTypes.INTEGER,
  name: DataTypes.STRING(12)
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
  },
  link: DataTypes.STRING
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
