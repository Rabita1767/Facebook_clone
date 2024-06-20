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
      console.log("hello", createAuth.id);
      const createUser = await authService.createUser(createAuth.id);
      return sendResponse(res, HttpStatus.OK, "Signup successful!", {
        result: createAuth,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
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
      return sendResponse(res, error.statusCode, error);
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
      return sendResponse(res, error.statusCode, error);
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
  public async profilePictureUpload(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId } = req.body;
      const findUser = await authService.findUserById(userId);
      const saveProfilePicture = await authService.saveProfilePicture(
        findUser,
        req.file
      );
      console.log("iame", req.file);
      return sendResponse(res, HttpStatus.OK, "Profile Picture Uploaded!", {
        result: saveProfilePicture,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async coverPhotoUpload(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      console.log("controller", userId);
      const findUser = await authService.findUserById(userId);
      const saveCoverPhoto = await authService.saveCoverPhoto(
        findUser,
        req.file
      );
      console.log("iame", req.file);
      return sendResponse(res, HttpStatus.OK, "Cover Photo Uploaded!", {
        result: saveCoverPhoto,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createProfileInfo(req: Request, res: Response): Promise<void> {
    try {
      const { userId, gender, relationshipStatus } = req.body;
      const findUser = await authService.findUserById(userId);
      const createProfileInfo = await authService.createProfileInfo(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile Info Created!", {
        result: createProfileInfo,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updateProfileInfo(req: Request, res: Response): Promise<void> {
    try {
      const { userId, gender, relationshipStatus } = req.body;
      const findUser = await authService.findUserById(userId);
      const updateProfileInfo = await authService.updateProfileInfo(req.body);
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new AuthController();
