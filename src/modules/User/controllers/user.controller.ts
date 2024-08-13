import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import HttpStatus from "../../../common/httpStatus";
import UserService from "../services/user.service";
import userService from "../services/user.service";
import { send } from "process";
import { message } from "../../../common/message";
class UserController {
  public async updateProfileInformationJobs(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, designation, company, startedAt, endedAt } = req.body;
      await UserService.findUserById(userId);
      const updateProfileInformationJobs =
        await UserService.updateProfileInformationJobs(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: updateProfileInformationJobs,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createProfileInformationBooks(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, bookName } = req.body;
      await UserService.findUserById(userId);
      const createProfileInformationBooks =
        await UserService.createProfileInformationBooks(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: createProfileInformationBooks,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updateProfileInformationMovies(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, movieName, tvShowName } = req.body;
      await UserService.findUserById(userId);
      const updateProfileInformationMovies =
        await UserService.updateProfileInformationMovies(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: updateProfileInformationMovies,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createProfileInformationMusic(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, music } = req.body;
      await UserService.findUserById(userId);
      const createProfileInformationMusic =
        await UserService.createProfileInformationMusic(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: createProfileInformationMusic,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updateProfileInformationMusic(req: Request, res: Response) {
    try {
      const { userId, music } = req.body;
      await UserService.findUserById(userId);
      const updateProfileInformationMusic =
        await UserService.updateProfileInformationMusic(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: updateProfileInformationMusic,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }

  public async getUserInfoById(req: Request, res: Response) {
    try {
      const getUserInfoById = await userService.getUserInfoById(req.userId);
      return sendResponse(res, HttpStatus.OK, "User info by Id!", {
        result: getUserInfoById,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }

  public async setBio(req: Request, res: Response): Promise<void> {
    try {
      const setBio = await userService.setBio(req.userId, req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.YOUR_BIO_HAS_BEEN_UPDATED_SUCCESSFULLY,
        setBio
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async setFriendRequestPrivacy(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const setFriendRequestPrivacy = await userService.setFriendRequestPrivacy(
        req.body,
        req.userId
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.FRIEND_REQUEST_PRIVACY_UPDATED,
        setFriendRequestPrivacy
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new UserController();
