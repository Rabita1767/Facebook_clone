import express from "express";
import friendController from "../controllers/friend.controller";
const routes = express();
routes.post("/sendFriendRequest", friendController.sendFriendRequest);
routes.get("/getFriendsById", friendController.getFiendsById);
routes.patch("/acceptFriendRequest", friendController.acceptFriendRequest);
routes.get("/getFriendRequestById", friendController.getFriendRequestById);
export default routes;
