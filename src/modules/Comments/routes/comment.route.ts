import express from "express";
import commentsController from "../controllers/comments.controller";
const routes = express();
routes.post("/createComment", commentsController.createComment);
export default routes;