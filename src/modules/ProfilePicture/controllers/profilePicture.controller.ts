import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import { message } from "../../../common/message";
import profilePictureService from "../services/profilePicture.service";
import HttpStatus from "../../../common/httpStatus";
import { send } from "process";
class ProfilePictureController {
  public async uploadProfilePicture(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const uploadProfilePicture =
        await profilePictureService.uploadProfilePicture(
          req.userId,
          req.file,
          req.body
        );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COVER_PHOTO_UPLOADED_SUCCESSFULLY,
        uploadProfilePicture
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, message.INTERNAL_SERVER_ERROR);
    }
  }
  public async getAllProfilePictureById(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const getAllCoverPhotoById =
        await profilePictureService.getAllProfilePictureById(req.userId);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COVER_PHOTO_FETCHED_SUCCESSFULLY,
        getAllCoverPhotoById
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async removeProfilePicture(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const removeProfilePicture =
        await profilePictureService.removeProfilePicture(req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COVER_REMOVED_SUCCESSFULLY,
        removeProfilePicture
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async setPrivacy(req: Request, res: Response): Promise<void> {
    try {
      const setPrivacy = await profilePictureService.setPrivacy(req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.PRIVACY_IS_UPDATED_SUCCESSFULLY
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new ProfilePictureController();
