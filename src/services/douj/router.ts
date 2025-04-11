import {Router} from "express";
import {newCategorySchema, newDoujSchema} from "./schema.js";
import DoujService from "./app.js";
const doujRouter = Router();
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: path.resolve("public/media/img/douj/"),
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split(".").at(-1));
  }
});
const doujImgUploader = multer({storage});

doujRouter.get("/category-list", DoujService.getCategoryList);
doujRouter.get("/list", DoujService.getList);
doujRouter.post("/new-category", newCategorySchema);
doujRouter.post("/new", newDoujSchema, doujImgUploader.single("img"), DoujService.newDouj);

export default doujRouter;
