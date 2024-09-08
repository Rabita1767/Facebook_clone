import auth from "../../Auth/middlewares/auth.middleware";
import express from "express";
import friendsExceptController from "../controllers/friendsExcept.controller";
const routes = express();
routes.post("/addFriendsExcept", auth.Auth, friendsExceptController.addFriendsExcept);
export default routes;