import {Request} from "express";
import {validationResult} from "express-validator";

let validateReq = (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    throw {
      status: 400,
      message: errors.array()
    };
};
export {validateReq};
