import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import educationProfileInfoService from "../services/educationProfileInfo.service";
import HttpStatus from "../../../common/httpStatus";
import { message } from "../../../common/message";
class EducationProfileInfoController {
  public async createEducationProfileInfo(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const createEducationProfileInfo =
        await educationProfileInfoService.createEducationProfileInfo(
          req.body,
          req.userId
        );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.PROFILE_UPDATED_SUCCESSFULLY,
        createEducationProfileInfo
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updateEducationProfileInfo(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const updateEducationProfileInfo =
        await educationProfileInfoService.updateEducationProfileInfo(req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.PROFILE_UPDATED_SUCCESSFULLY,
        updateEducationProfileInfo
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async deleteEducationProfileInfo(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const deleteEducationProfileInfo =
        await educationProfileInfoService.deleteEducationProfileInfo(req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.PROFILE_UPDATED_SUCCESSFULLY,
        deleteEducationProfileInfo
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new EducationProfileInfoController();
