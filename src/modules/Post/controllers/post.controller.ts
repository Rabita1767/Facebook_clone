import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import postService from "../services/post.service";
import HttpStatus from "../../../common/httpStatus";
import utility from "../../Auth/utils/utility";
import { promises } from "dns";
class PostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const createPost = await postService.createPost(req.body, req.files);
      console.log("check file", req.files);
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
      const updatedPost = await postService.updatePost(req.body, req.file);
      return sendResponse(res, HttpStatus.OK, "Post updated!", {
        result: updatedPost,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getPostsById(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const getPostsById = await postService.getPostsById(userId);
      return sendResponse(res, HttpStatus.OK, "Posts by Id!", {
        result: getPostsById,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async setPostPrivacy(req: Request, res: Response): Promise<void> {
    try {
      const { postId, privacyType } = req.body;
      const setPostPrivacy = await postService.setPostPrivacy(req.body);
      return sendResponse(res, HttpStatus.OK, "Post Privacy updated!", {
        result: setPostPrivacy,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new PostController();
