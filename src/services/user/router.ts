import express from "express";
const router = express.Router();
import UserService from "./app.js";

router.get("/profile", UserService.getProfile);

export default router;
