import express from "express";
import postReactionController from "../controllers/postReaction.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post(
  "/givePostReaction",
  auth.Auth,
  postReactionController.givePostReaction
);
routes.put(
  "/removePostReaction",
  auth.Auth,
  postReactionController.removePostReaction
);
routes.get(
  "/getAllPostReaction",
  auth.Auth,
  postReactionController.getAllPostReaction
);
export default routes;
