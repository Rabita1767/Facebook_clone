import express from "express";
import auth from "../../Auth/middlewares/auth.middleware";
import commentReactionController from "../controllers/commentReaction.controller";
const routes = express();
routes.post(
  "/giveCommentReaction",
  auth.Auth,
  commentReactionController.giveCommentReaction
);
