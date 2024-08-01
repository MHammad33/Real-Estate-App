import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

// Route - /api/v1/auth
authRouter.route("/login").post(authController.loginUser);
authRouter.route("/register").post(authController.registerUser);
authRouter.route("/logout").post(authController.logoutUser);

export default authRouter;
