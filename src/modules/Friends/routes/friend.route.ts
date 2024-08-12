import express from "express";
import friendController from "../controllers/friend.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post(
  "/sendFriendRequest",
  auth.Auth,
  friendController.sendFriendRequest
);
routes.post(
  "/acceptFriendRequest",
  auth.Auth,
  friendController.acceptFriendRequest
);
routes.get("/getAllFriends", auth.Auth, friendController.getAllFriends);
export default routes;
