import express from "express";
import authService from "./app.js";
import {LoginRegisterSchema} from "./schema.js";
const router = express.Router();

// Validate an existing user and issue a JWT
router.post("/login", LoginRegisterSchema, authService.login);

// Register a new user
router.post("/register", LoginRegisterSchema, authService.register);

export default router;
