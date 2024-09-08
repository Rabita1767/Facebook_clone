import express from "express";
import postReactionController from "../controllers/postReaction.controller";
import auth from "../../Auth/middlewares/auth.middleware";
const routes = express();
routes.post("/givePostReaction", auth.Auth, postReactionController.givePostReaction);
export default routes;
