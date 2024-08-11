import express from "express";
import friendController from "../controllers/friend.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post(
  "/sendFriendRequest",
  auth.Auth,
  friendController.sendFriendRequest
);
export default routes;
