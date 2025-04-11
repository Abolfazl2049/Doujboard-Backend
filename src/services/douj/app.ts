import {NextFunction, Request, Response} from "express";
import doujDb from "./db.js";
import {sendRes} from "#src/utils/api-response.js";

const getList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let doujs = await doujDb.Douj.findAll({where: {category: req.params.category}});
    sendRes(req, res, {ok: true, data: doujs});
  } catch (err) {
    next(err);
  }
};

const getCategoryList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // @ts-ignore
    let categories = await doujDb.Category.findAll({where: {user: req.user.id}});
    sendRes(req, res, {ok: true, data: categories});
  } catch (err) {
    next(err);
  }
};

const newDouj = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.file);
    res.send(req.file?.path.split("public")[1].replaceAll("\\", "/"));
  } catch (err) {
    next(err);
  }
};

export default {
  getList,
  getCategoryList,
  newDouj
};
