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
routes.get("/getAllComments", auth.Auth, commentsController.getAllComments);
routes.get("/getAllReplies", auth.Auth, commentsController.getAllReplies);
export default routes;
