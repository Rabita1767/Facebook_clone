import HttpStatus from "../../../common/httpStatus";
import sendResponse from "../../Auth/utils/response";
import postService from "../../Post/services/post.service";
import commentsService from "../services/comments.service";

class CommentController {
  public async createComment(req: Request, res: Response): Promise<void> {
    try {
      const createComment = await commentsService.createComment(req.body);
      return sendResponse(res, HttpStatus.OK, "Data created Successfully", {
        result: createComment,
      });
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
