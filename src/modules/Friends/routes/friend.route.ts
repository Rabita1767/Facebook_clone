import express from "express";
import friendController from "../controllers/friend.controller";
const routes = express();
routes.post("/sendFriendRequest", friendController.sendFriendRequest);
export default routes;
