import express from "express";
import multer from "multer";
import { uploadFile } from "../utils/multerConfiguration";
import authController from "../controllers/auth.controller";
import authValidator from "../middlewares/auth.validator";
import { UserRepository } from "../../User/repositories/user.repository";
const routes = express();
routes.post("/signup", authValidator.signUp, authController.signup);
routes.post("/login", authController.login);
routes.post("/createAccessToken", authController.createAccessToken);

export default routes;
