import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import postService from "../services/post.service";
import HttpStatus from "../../../common/httpStatus";
import utility from "../../Auth/utils/utility";
class PostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { userId, content, media, privacy, checkIn, lifeEvent } = req.body;
      const createPost = await postService.createPost(req.body);
      return sendResponse(res, HttpStatus.OK, "Post created!", {
        result: createPost,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async updatePost(req: Request, res: Response): Promise<void> {
    try {
      const { userId, content, media, privacy, checkIn, lifeEvent } = req.body;
      const updatedPost = await postService.updatePost(req.body);
      return sendResponse(res, HttpStatus.OK, "Post updated!", {
        result: updatedPost,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new PostController();
