import sequelize from "#src/tools/sequelize.js";
import {DataTypes} from "sequelize";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    unique: true,
    type: DataTypes.STRING
  },
  salt: DataTypes.STRING,
  hash: DataTypes.STRING
});

let getUser = async (username: string) => {
  try {
    let u = await User.findOne({where: {username}});
    if (u) return u;
    else throw "401";
  } catch {
    throw {
      status: 401,
      message: "wrong password or username"
    };
  }
};

export default {
  User,
  getUser
};
