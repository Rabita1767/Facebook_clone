import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import sendResponse from "../utils/response";
import HttpStatus from "../../../common/httpStatus";
import dotenv from "dotenv";
dotenv.config();
class Authentication {
  Auth(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization;
      if (token) {
        token = token.split(" ")[1];
        let user = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (user) {
          console.log("user", user);
          req.userId = user.User.id;
          console.log("req.userId", req.userId);
          next();
        } else {
          console.log("errorrrr");
          throw new Error();
        }
      } else {
        return sendResponse(
          res,
          HttpStatus.UNAUTHORIZED,
          "Unauthorized access!"
        );
      }
    } catch (error) {
      console.log(error);
      if (error instanceof jwt.JsonWebTokenError) {
        console.log("check");
        return sendResponse(res, error.statusCode, "Token Invalid");
      }
      if (error instanceof jwt.tokenExpiredError) {
        return sendResponse(res, error.statusCode, "Token has expired!");
      }
      return sendResponse(res, error.statusCode, "Internal Server Error!");
    }
  }
}
export default new Authentication();
