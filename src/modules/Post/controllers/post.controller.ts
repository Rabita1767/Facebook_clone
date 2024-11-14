import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import postService from "../services/post.service";
import HttpStatus from "../../../common/httpStatus";
import utility from "../../Auth/utils/utility";
import { message } from "../../../common/message";
class PostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
      const createPost = await postService.createPost(
        req.userId,
        req.body,
        req.files
      );
      console.log("check file", req.files);
      return sendResponse(res, HttpStatus.OK, "Post created!", createPost);
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
  public async getPostsById(req: Request, res: Response): Promise<void> {
    try {
      const getPostsById = await postService.getPostsById(req.userId, req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.POST_FETCHED_SUCCESSFULLY,
        getPostsById
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async removePostById(req: Request, res: Response): Promise<void> {
    try {
      const removePostById = await postService.removePostById(
        req.userId,
        req.body
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.POST_REMOVED_SUCCESSFULLY,
        removePostById
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getNewsfeedUpdates(req: Request, res: Response): Promise<void> {
    try {
      const getNewsfeedUpdates = await postService.getNewsfeedUpdates(
        req.userId
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.DATA_FETCHED_SUCCESSFULLY,
        getNewsfeedUpdates
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new PostController();
