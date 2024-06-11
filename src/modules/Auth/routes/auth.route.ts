import express from "express";
import authController from "../controllers/auth.controller";
import authValidator from "../middlewares/auth.validator";
const routes=express();
routes.post("/signup",authValidator.signUp,authController.signup);
export default routes;