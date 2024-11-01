import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import commentReactionService from "../services/commentReaction.service";
import HttpStatus from "../../../common/httpStatus";
import { message } from "../../../common/message";
class CommentReactionController {
  public async giveCommentReaction(req: Request, res: Response): Promise<void> {
    try {
      const giveComentReaction =
        await commentReactionService.giveCommentReaction(req.userId, req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.REACTION_GIVEN_SUCCESSFULLY,
        giveComentReaction
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }

  public async removeCommentReaction(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const removeCommentReaction =
        await commentReactionService.removeCommentReaction(
          req.userId,
          req.body
        );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.REACTION_REMOVED_SUCCESSFULLY,
        removeCommentReaction
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new CommentReactionController();
