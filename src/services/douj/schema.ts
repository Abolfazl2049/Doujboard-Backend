import {checkSchema} from "express-validator";
const newDoujSchema = checkSchema({
  title: {
    in: "body",
    isString: true
  },
  hidden: {
    in: "body",
    optional: true,
    isBoolean: true,
    default: false
  },
  category: {
    in: "body",
    isNumeric: true
  }
});

const newCategorySchema = checkSchema({
  name: {
    isString: true,
    in: "body"
  }
});

export {newCategorySchema, newDoujSchema};
