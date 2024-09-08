import { Request, Response } from "express";
import HttpStatus from "../../../common/httpStatus";
import sendResponse from "../../Auth/utils/response";
import postReactionService from "../services/postReaction.service";
import { Result } from "express-validator";
import { message } from "../../../common/message";
class PostReactionController {
  public async givePostReaction(req: Request, res: Response): Promise<void> {
    try {
      const givePostReaction = await postReactionService.givePostReaction(
        req.userId, req.body
      );
      return sendResponse(res, HttpStatus.OK, message.REACTION_GIVEN_SUCCESSFULLY, givePostReaction
      );
    } catch (error) {
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getAllPostReaction(req: Request, res: Response): Promise<void> {
    try {
      const getAllPostReaction = await postReactionService.getAllPostReaction(
        req.body
      );
      return sendResponse(res, HttpStatus.OK, "Data fetched successfully", {
        result: getAllPostReaction,
      });
    } catch (error) {
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new PostReactionController();
