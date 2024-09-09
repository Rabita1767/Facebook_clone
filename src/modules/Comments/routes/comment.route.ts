import express from "express";
import commentsController from "../controllers/comments.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post("/createComment", auth.Auth, commentsController.createComment);
routes.post(
  "/createCommentReply",
  auth.Auth,
  commentsController.createCommentReply
);
routes.get("/getAllComments", commentsController.getAllComments);
routes.get("/getAllReplies", commentsController.getAllReplies);
export default routes;
