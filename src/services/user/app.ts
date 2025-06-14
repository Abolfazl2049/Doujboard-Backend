import {sendRes} from "#src/utils/api-response.js";
import {NextFunction, Request, Response} from "express";

let getProfile = async (req: Request, res: Response, next: NextFunction) => {
  sendRes(req, res, req.user);
};
export default {
  getProfile
};
