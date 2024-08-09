import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import { message } from "../../../common/message";
import coverPhotoService from "../services/coverPhoto.service";
import HttpStatus from "../../../common/httpStatus";
import { send } from "process";
class CoverPhoto {
  public async uploadCoverPhoto(req: Request, res: Response): Promise<void> {
    try {
      const uploadCoverPhoto = await coverPhotoService.uploadCoverPhoto(
        req.userId,
        req.file,
        req.body
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COVER_PHOTO_UPLOADED_SUCCESSFULLY,
        uploadCoverPhoto
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, message.INTERNAL_SERVER_ERROR);
    }
  }
  public async getAllCoverPhotoById(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const getAllCoverPhotoById = await coverPhotoService.getAllCoverPhotoById(
        req.userId
      );
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
  public async removeCoverPhoto(req: Request, res: Response): Promise<void> {
    try {
      const removeCoverPhoto = await coverPhotoService.removeCoverPhoto(
        req.body
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COVER_REMOVED_SUCCESSFULLY,
        removeCoverPhoto
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async setPrivacy(req: Request, res: Response): Promise<void> {
    try {
      const setPrivacy = await coverPhotoService.setPrivacy(req.body);
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
export default new CoverPhoto();
