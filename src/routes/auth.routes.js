const express = require("express");

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { authRateLimiter } = require("../middlewares/rate-limit.middleware");

const authRouter = express.Router();

authRouter.post(
  "/register",
  authRateLimiter,
  authController.registerUserController,
);

authRouter.post("/login", authRateLimiter, authController.loginUserController);

authRouter.get("/logout", authController.logoutUserController);

authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
