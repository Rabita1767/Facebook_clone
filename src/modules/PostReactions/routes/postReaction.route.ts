import express from "express";
import postController from "../../Post/controllers/post.controller";
import postReactionController from "../controllers/postReaction.controller";
const routes = express();
routes.post("/givePostReaction", postReactionController.givePostReaction);
routes.get("/givePostReaction", postReactionController.givePostReaction);
export default routes;
