import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
// import friendController from "@friendsModule/controllers/friend.controller";
import friendController from "../../Friends/controllers/friend.controller";
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
routes.post("/cancelRequest", auth.Auth, friendController.cancelRequest);
routes.post(
  "/removeFromFriendList",
  auth.Auth,
  friendController.removeFromFriendList
);
export default routes;
