import express from "express";
import UserController from "../controllers/user.controller";
import userController from "../controllers/user.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();

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
routes.post("/setBio", auth.Auth, userController.setBio);
routes.post(
  "/setFriendRequestPrivacy",
  auth.Auth,
  userController.setFriendRequestPrivacy
);
export default routes;
