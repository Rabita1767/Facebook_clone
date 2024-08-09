import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
import coverPhotoController from "../controllers/coverPhoto.controller";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
const routes = express();
routes.post(
  "/uploadCoverPhoto",
  auth.Auth,
  uploadFile.single("image"),
  coverPhotoController.uploadCoverPhoto
);
routes.get(
  "/getAllCoverPhotoById",
  auth.Auth,
  coverPhotoController.getAllCoverPhotoById
);
routes.post(
  "/removeCoverPhoto",
  auth.Auth,
  coverPhotoController.removeCoverPhoto
);
routes.post("/setPrivacy", auth.Auth, coverPhotoController.setPrivacy);
export default routes;
