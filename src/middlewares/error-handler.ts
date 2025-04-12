import {sendRes} from "#src/utils/api-response.js";
import {NextFunction, Request, Response} from "express";
let errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) sendRes(req, res, err.message ?? err, false, err.status ?? 500);
};
export {errorHandler};
