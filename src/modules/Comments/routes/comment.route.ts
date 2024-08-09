import express from "express";
import commentsController from "../controllers/comments.controller";
const routes = express();
routes.post("/createComment", commentsController.createComment);
routes.get("/getAllComments", commentsController.getAllComments);
routes.get("/getAllReplies", commentsController.getAllReplies);
export default routes;
