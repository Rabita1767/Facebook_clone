import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import postService from "../services/post.service"
import HttpStatus from "../../../common/httpStatus";
import utility from "../../Auth/utils/utility";
class PostController {
  public async Post(req: Request, res: Response): Promise<void> {
    try {
      const { userId, content, media, privacy, checkIn, lifeEvent } = req.body;
      const createPost=await 
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new PostController();
