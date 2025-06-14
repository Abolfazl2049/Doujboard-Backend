import {logResponse} from "#src/middlewares/logger.js";
import {Request, Response} from "express";

export const sendRes = (req: Request, res: Response, data: any, ok: boolean = true, status: number = 200) => {
  logResponse({data: data, status, uniqueId: req.uniqueId});

  res.status(status).send({ok, data});
};
