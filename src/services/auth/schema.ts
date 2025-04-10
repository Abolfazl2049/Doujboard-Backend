import {checkSchema} from "express-validator";
const LoginRegisterSchema = checkSchema({
  username: {
    in: "body",
    isString: true
  },
  password: {
    in: "body",
    isString: true
  }
});
export {LoginRegisterSchema};
