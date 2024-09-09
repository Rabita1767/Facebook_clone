import HttpStatus from "../../../common/httpStatus";
import { Request, Response } from "express";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import postService from "../../Post/services/post.service";
import commentsService from "../services/comments.service";

class CommentController {
  public async createComment(req: Request, res: Response): Promise<void> {
    try {
      const createComment = await commentsService.createComment(
        req.userId,
        req.body
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.COMMENT_CREATED_SUCCESSFULLY,
        createComment
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createCommentReply(req: Request, res: Response): Promise<void> {
    try {
      const createCommentReply = await commentsService.createCommentReply(
        req.userId,
        req.body
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.REPLY_CREATED_SUCCESSFULLY,
        createCommentReply
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getAllComments(req: Request, res: Response): Promise<void> {
    try {
      await postService.findPostByPostId(req.body);
      const getAllComments = await commentsService.getAllComments(req.body);
      return sendResponse(res, HttpStatus.OK, "Comments found successfully!", {
        result: getAllComments,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getAllReplies(req: Request, res: Response): Promise<void> {
    try {
      const getAllReplies = await commentsService.getAllReplies(req.body);
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new CommentController();
