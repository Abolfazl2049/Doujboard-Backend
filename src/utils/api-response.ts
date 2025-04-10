import {logResponse} from "#src/middlewares/logger.js";
import {Request, Response} from "express";

export const sendRes = (
  req: Request,
  res: Response,
  apiRes: {
    ok: boolean;
    data: any;
    status?: number;
  }
) => {
  let status = apiRes.status ?? 200;
  // @ts-ignore
  logResponse({data: apiRes.data, status, uniqueId: req.uniqueId});

  res.status(status).send({ok: apiRes.ok, data: apiRes.data});
};
