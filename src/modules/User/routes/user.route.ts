import express from "express";
import multer from "multer";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
import UserController from "../controllers/user.controller";

const routes = express();

routes.post(
  "/profilePictureUpload",
  uploadFile.single("image"),
  UserController.profilePictureUpload
);
routes.post(
  "/coverPhotoUpload",
  uploadFile.single("image"),
  UserController.coverPhotoUpload
);
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
export default routes;
