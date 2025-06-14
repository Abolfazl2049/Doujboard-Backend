import {NextFunction, Request, Response} from "express";
import doujDb from "./db.js";
import {sendRes} from "#src/utils/api-response.js";
import {validateReqSchema} from "#src/utils/validation.js";
import cloudinary from "#src/tools/cloudinary.js";

const getList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let doujs = await doujDb.Douj.findAll({where: {category: req.query.category}});
    sendRes(req, res, doujs);
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
    let imgPath = typeof req.body.img === "string" ? req.body.img : req.body.img?.path;
    if (!imgPath)
      throw {
        status: 400,
        message: "Img field is necessary"
      };
    validateReqSchema(req);
    let imgRes = await cloudinary.uploader.upload(imgPath, {
      public_id: req.body.title
    });
    let newDouj = await doujDb.Douj.create({
      category: req.body.category,
      title: req.body.title,
      img: imgRes.url,
      hidden: req.body.hidden,
      description: req.body.description ?? null,
      link: req.body.link
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
    sendRes(req, res, newCategory);
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
