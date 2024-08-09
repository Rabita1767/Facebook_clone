import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
import coverPhotoController from "../controllers/profilePicture.controller";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
import profilePictureController from "../controllers/profilePicture.controller";
const routes = express();
routes.post(
  "/uploadProfilePicture",
  auth.Auth,
  uploadFile.single("image"),
  profilePictureController.uploadProfilePicture
);
routes.get(
  "/getAllProfilePictureById",
  auth.Auth,
  profilePictureController.getAllProfilePictureById
);
routes.post(
  "/removeProfilePicture",
  auth.Auth,
  profilePictureController.removeProfilePicture
);
routes.post("/setPrivacy", auth.Auth, profilePictureController.setPrivacy);
export default routes;
