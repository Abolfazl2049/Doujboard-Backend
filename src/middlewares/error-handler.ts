import {sendApiResponse} from "#src/utils/api-response.js";
import {NextFunction, Request, Response} from "express";
let errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) sendApiResponse(req, res, {ok: false, data: err.message ?? err, status: err.status ?? 500});
};
export {errorHandler};
