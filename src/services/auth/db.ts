import {sequelize} from "#src/tools/sequelize.js";
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
  if (username) {
    try {
      return await User.findOne({where: {username}});
    } catch {
      throw {
        status: 404,
        message: "you're not in my database clown ,sign up first"
      };
    }
  } else
    throw {
      status: 400,
      message: "provide a fucking username"
    };
};

export const authDb = {
  User,
  getUser
};
