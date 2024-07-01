import express from "express";
import friendController from "../controllers/friend.controller";
const routes = express();
routes.post("/sendFriendRequest", friendController.sendFriendRequest);
routes.get("/getFriendsById", friendController.getFiendsById);
export default routes;
