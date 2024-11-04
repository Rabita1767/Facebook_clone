import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "../src/modules/Auth/routes/auth.route";
import userRoute from "../src/modules/User/routes/user.route";
import postRoute from "../src/modules/Post/routes/post.route";
import friendRoute from "../src/modules/Friends/routes/friend.route";
import postReactionRoute from "../src/modules/PostReactions/routes/postReaction.route";
import commentRoute from "../src/modules/Comments/routes/comment.route";
import SocketGateway from "./gateway";
import { prisma } from "./config/prisma";
dotenv.config();
const app = express();
const socketServer = createServer(app);
export const io = new Server(socketServer, {
  cors: {
    origin: "*",
  },
});
io.of("/testing").on("connection", SocketGateway);
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/friend", friendRoute);
app.use("/postReaction", postReactionRoute);
app.use("/comment", commentRoute);
const port = process.env.PORT || 8000;
const socketPort = process.env.SOCKET_PORT || 9000;
async function main() {
  if (!port || !socketPort) {
    throw new Error("Server is unable to start as ports are not defined");
  }
  await prisma.$connect();
  socketServer.listen(socketPort, () => {
    console.log(`Socket is running at port ${socketPort}`);
  });
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
