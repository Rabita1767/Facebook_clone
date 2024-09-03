import express from "express";
import postController from "../controllers/post.controller";
import { uploadFile } from "../../Auth/utils/multerConfiguration";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post(
  "/createPost",
  auth.Auth,
  uploadFile.array("media", 10),
  postController.createPost
);
routes.put("/updatePost", postController.updatePost);
routes.patch("/setPostPrivacy", postController.setPostPrivacy);
routes.get("/getPostsById", auth.Auth, postController.getPostsById);
routes.delete("/removePostById", auth.Auth, postController.removePostById);

export default routes;
