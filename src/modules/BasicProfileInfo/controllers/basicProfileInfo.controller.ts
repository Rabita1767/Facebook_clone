import HttpStatus from "../../../common/httpStatus";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import { Request, Response } from "express";
import basicProfileInfoService from "../services/basicProfileInfo.service";

class BasicProfileInfoController {
  public async updateBasicProfileInfo(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const updateBasicProfileInfo =
        await basicProfileInfoService.updateBasicProfileInfo(
          req.body,
          req.userId
        );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.PROFILE_UPDATED_SUCCESSFULLY,
        updateBasicProfileInfo
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new BasicProfileInfoController();
