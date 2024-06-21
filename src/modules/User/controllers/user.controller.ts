import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import HttpStatus from "../../../common/httpStatus";
import UserService from "../services/user.service";
class UserController {
  public async profilePictureUpload(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId } = req.body;
      const findUser = await UserService.findUserById(userId);
      const saveProfilePicture = await UserService.saveProfilePicture(
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
      const findUser = await UserService.findUserById(userId);
      const saveCoverPhoto = await UserService.saveCoverPhoto(
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
      const findUser = await UserService.findUserById(userId);
      const createProfileInfo = await UserService.createProfileInfo(req.body);
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
      await UserService.findUserById(userId);
      const updateProfileInfo = await UserService.updateProfileInfo(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: updateProfileInfo,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createProfileInformationEducation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, degreeName, institution, startedAt, endedAt } = req.body;
      await UserService.findUserById(userId);
      const createProfileInformationEducation =
        await UserService.createProfileInformationEducation(req.body);
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updateProfileInformationEducation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, degreeName, institution, startedAt, endedAt } = req.body;
      await UserService.findUserById(userId);
      const updateProfileInfo =
        await UserService.updateProfileInformationEducation(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: updateProfileInfo,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createProfileInformationJobs(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, designation, company, startedAt, endedAt } = req.body;
      await UserService.findUserById(userId);
      const createProfileInformationJobs =
        await UserService.createProfileInformationJobs(req.body);
      return sendResponse(res, HttpStatus.OK, "Profile info updated!", {
        result: createProfileInformationJobs,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
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
}
export default new UserController();
