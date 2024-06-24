import express from "express";
import postController from "../controllers/post.controller";
const routes = express();
routes.post("/createPost", postController.createPost);
routes.patch("/updatePost", postController.updatePost);
export default routes;
