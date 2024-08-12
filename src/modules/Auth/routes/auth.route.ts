import express from "express";
import authController from "../controllers/auth.controller";
import authValidator from "../middlewares/auth.validator";
const routes = express();
routes.post("/signup", authValidator.signUp, authController.signup);
routes.post("/login", authController.login);
routes.post("/createAccessToken", authController.createAccessToken);

export default routes;
