import express from "express";
import multer from "multer";
import { uploadFile } from "../utils/multerConfiguration";
import authController from "../controllers/auth.controller";
import authValidator from "../middlewares/auth.validator";
const routes = express();
routes.post("/signup", authValidator.signUp, authController.signup);
routes.post("/login", authController.login);
routes.post("/createAccessToken", authController.createAccessToken);
routes.post(
  "/profilePictureUpload",
  uploadFile.single("image"),
  authController.profilePictureUpload
);
routes.post(
  "/coverPhotoUpload",
  uploadFile.single("image"),
  authController.coverPhotoUpload
);
routes.post("/createProfileInfo", authController.createProfileInfo);
routes.put("/updateProfileInfo", authController.updateProfileInfo);
routes.put(
  "/updateProfileInformationEducation",
  authController.updateProfileInformationEducation
);
routes.post(
  "/createProfileInformationEducation",
  authController.createProfileInformationEducation
);
routes.put(
  "/updateProfileInformationEducation",
  authController.updateProfileInformationEducation
);
routes.post(
  "/createProfileInformationJobs",
  authController.createProfileInformationJobs
);
export default routes;
