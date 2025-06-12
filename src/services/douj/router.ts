import {Router} from "express";
import {newCategorySchema, newDoujSchema} from "./schema.js";
import {genStorage} from "#src/utils/multer.js";
import DoujService from "./app.js";
import multer from "multer";

const doujRouter = Router();

const doujImgUploader = multer({storage: genStorage("public/media/img/douj/")});

doujRouter.get("/category-list", DoujService.getCategoryList);
doujRouter.get("/list", DoujService.getList);
doujRouter.post("/new-category", newCategorySchema, DoujService.newCategory);
doujRouter.post("/new", doujImgUploader.single("img"), newDoujSchema, DoujService.newDouj);

export default doujRouter;
