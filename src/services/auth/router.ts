import express from "express";
import {authService} from "./index.js";
import {sendApiResponse} from "#src/utils/api-response.js";
const router = express.Router();

router.get("/protected", (req, res, next) => {
  sendApiResponse(req, res, {
    ok: true,
    data: {
      message: "you are authenticated"
    }
  });
});

// Validate an existing user and issue a JWT
router.post("/login", function (req, res, next) {
  try {
    authService.login(req, res);
  } catch (err) {
    next(err);
  }
});

// Register a new user
router.post("/register", async (req, res, next) => {
  try {
    authService.register(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
