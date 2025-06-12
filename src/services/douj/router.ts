import {Router} from "express";
import {newCategorySchema, newDoujSchema} from "./schema.js";
import {genStorage} from "#src/utils/multer.js";
import DoujService from "./app.js";
import multer from "multer";

const doujRouter = Router();

const doujImgUploader = multer({storage: genStorage("public/media/img/douj/")});

doujRouter.get("/", DoujService.getList);
doujRouter.post("/", doujImgUploader.single("img"), newDoujSchema, DoujService.newDouj);
doujRouter.get("/category", DoujService.getCategoryList);
doujRouter.post("/category", newCategorySchema, DoujService.newCategory);

export default doujRouter;
