import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "../src/modules/Auth/routes/auth.route";
import userRoute from "../src/modules/User/routes/user.route";
import postRoute from "../src/modules/Post/routes/post.route";
dotenv.config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
