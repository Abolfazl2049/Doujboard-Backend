import {Router} from "express";
import {newCategorySchema, newDoujSchema} from "./schema.js";
import DoujService from "./app.js";
const doujRouter = Router();

doujRouter.get("/category-list", DoujService.getCategoryList);
doujRouter.get("/list", DoujService.getList);
doujRouter.post("/category", newCategorySchema);
doujRouter.post("/douj", newDoujSchema);

export default doujRouter;
