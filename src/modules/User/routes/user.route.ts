import express from "express";
import multer from "multer";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
import UserController from "../controllers/user.controller";
import userController from "../controllers/user.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();

routes.post("/createProfileInfo", UserController.createProfileInfo);
routes.put("/updateProfileInfo", UserController.updateProfileInfo);
routes.put(
  "/updateProfileInformationEducation",
  UserController.updateProfileInformationEducation
);
routes.post(
  "/createProfileInformationEducation",
  UserController.createProfileInformationEducation
);
routes.put(
  "/updateProfileInformationEducation",
  UserController.updateProfileInformationEducation
);
routes.post(
  "/createProfileInformationJobs",
  UserController.createProfileInformationJobs
);
routes.put(
  "/updateProfileInformationJobs",
  UserController.updateProfileInformationJobs
);
routes.post(
  "/createProfileInformationBooks",
  UserController.createProfileInformationBooks
);
routes.put(
  "/updateProfileInformationMovies",
  UserController.updateProfileInformationMovies
);
routes.post(
  "/createProfileInformationMusic",
  UserController.createProfileInformationMusic
);
routes.put(
  "/updateProfileInformationMusic",
  UserController.updateProfileInformationMusic
);
routes.get("/getUserInfoById", userController.getUserInfoById);
routes.get("/seeProfileInfo", userController.seeProfileinfo);
routes.post("/setBio", auth.Auth, userController.setBio);
export default routes;
