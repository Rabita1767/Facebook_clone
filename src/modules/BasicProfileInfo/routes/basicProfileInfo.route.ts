import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
import basicProfileInfoController from "../controllers/basicProfileInfo.controller";
const routes = express();
routes.put(
  "/updateBasicProfileInfo",
  auth.Auth,
  basicProfileInfoController.updateBasicProfileInfo
);
export default routes;
