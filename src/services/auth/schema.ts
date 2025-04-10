import {checkSchema} from "express-validator";
const LoginRegisterSchema = checkSchema({
  username: {
    in: "body",
    isString: true,
    notEmpty: {
      errorMessage: "Provide a username"
    }
  },
  password: {
    in: "body",
    isString: true,
    notEmpty: {
      errorMessage: "Provide a password"
    }
  }
});
export {LoginRegisterSchema};
