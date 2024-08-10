import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
import educationProfileInfoController from "../controllers/educationProfileInfo.controller";
const routes = express();
routes.post(
  "/createEducationProfileInfo",
  auth.Auth,
  educationProfileInfoController.createEducationProfileInfo
);
routes.put(
  "/updateEducationProfileInfo",
  auth.Auth,
  educationProfileInfoController.updateEducationProfileInfo
);
routes.post(
  "/deleteEducationProfileInfo",
  auth.Auth,
  educationProfileInfoController.deleteEducationProfileInfo
);
