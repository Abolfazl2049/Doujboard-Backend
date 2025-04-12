import {NextFunction, Request, Response} from "express";
import doujDb from "./db.js";
import {sendRes} from "#src/utils/api-response.js";
import {parseFilePath} from "#src/utils/multer.js";
import {validateReqSchema} from "#src/utils/validation.js";

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
    sendRes(req, res, categories);
  } catch (err) {
    next(err);
  }
};

const newDouj = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateReqSchema(req);
    if (!req.file)
      throw {
        status: 400,
        message: "Img field is necessary"
      };
    let newDouj = await doujDb.Douj.create({
      category: req.body.category,
      title: req.body.title,
      img: parseFilePath(req),
      hidden: req.body.hidden,
      description: req.body.description ?? null
    });
    sendRes(req, res, newDouj);
  } catch (err) {
    next(err);
  }
};

let newCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateReqSchema(req);
    let newCategory = await doujDb.Category.create({user: req.user.id, name: req.body.name});
    sendRes(req, res, newCategory );
  } catch (err) {
    next(err);
  }
};

export default {
  getList,
  getCategoryList,
  newDouj,
  newCategory
};
