import { Request, Response } from "express";
import { prisma } from "../../../config/prisma";
import authService from "../services/auth.service";
import sendResponse from "../utils/response";
import HttpStatus from "../../../common/httpStatus";
import utility from "../utils/utility";
import { Prisma } from "@prisma/client";
let refreshTokens = [];
class AuthController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const { fName, lName, password, confirmPassword, phoneNumber, Dob } =
        req.body;
      const createAuth = await authService.createAuth(req.body);
      const createUser = await authService.createUser(req.body);
      return sendResponse(res, HttpStatus.OK, "Signup successful!", {
        result: createAuth,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);
      const accessToken = await utility.generateAccessToken(user);
      const refreshToken = await utility.generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      return sendResponse(res, HttpStatus.OK, "Login successful!", {
        result: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
  public async logout(req: Request, res: Response): Promise<void> {
    try {
      const { refreshToken } = req.body;
      refreshTokens = refreshTokens.filter((token) => token != refreshToken);
      return sendResponse(res, HttpStatus.OK, "Logout successful!", {
        result: refreshToken,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
  public async createAccessToken(req: Request, res: Response): Promise<void> {
    try {
      const { email, refreshToken } = req.body;
      const findUser = await authService.findUserByEmail(email);
      const createAccessToken = await utility.verifyRefreshToken(
        findUser,
        refreshToken,
        refreshTokens
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        "Create Access Token successful!",
        {
          result: createAccessToken,
        }
      );
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
  public async profilePictureUpload(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const findUser = await authService.findUserById(req.body);
      console.log("findUser", findUser);
      console.log("file", req.file);
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
}
export default new AuthController();
