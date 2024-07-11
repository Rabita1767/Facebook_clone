import { send } from "process";
import HttpStatus from "../../../common/httpStatus";
import sendResponse from "../../Auth/utils/response";
import postReactionService from "../services/postReaction.service";
import { Result } from "express-validator";
class PostReactionController {
  public async givePostReaction(req: Request, res: Response): Promise<void> {
    try {
      const givePostReaction = await postReactionService.givePostReaction(
        req.body
      );
      return sendResponse(res, HttpStatus.OK, "Data found successfully!", {
        result: givePostReaction,
      });
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
