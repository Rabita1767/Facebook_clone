import express from "express";
import postController from "../controllers/post.controller";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
const routes = express();
routes.post(
  "/createPost",
  uploadFile.array("media", 10),
  postController.createPost
);
routes.patch("/updatePost", postController.updatePost);
routes.get("/getPostsById", postController.getPostsById);
export default routes;
