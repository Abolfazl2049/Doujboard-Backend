import express from "express";
import authService from "./app.js";
import {sendRes} from "#src/utils/api-response.js";
import {LoginRegisterSchema} from "./schema.js";
const router = express.Router();

router.get("/protected", (req, res, next) => {
  sendRes(req, res, {
    ok: true,
    data: {
      message: "you are authenticated"
    }
  });
});

// Validate an existing user and issue a JWT
router.post("/login", LoginRegisterSchema, authService.login);

// Register a new user
router.post("/register", LoginRegisterSchema, authService.register);

export default router;
