import {checkSchema} from "express-validator";
const newDoujSchema = checkSchema({
  img: {
    isEmpty: {
      errorMessage: "Provide a Img"
    }
  },
  title: {
    isString: true
  },
  hidden: {
    isBoolean: true
  },
  category: {
    isNumeric: true
  }
});

const newCategorySchema = checkSchema({
  user: {
    isNumeric: true
  }
});

export {newCategorySchema, newDoujSchema};
