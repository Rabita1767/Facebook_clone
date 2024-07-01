import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import HttpStatus from "../../../common/httpStatus";
import friendService from "../services/friend.service";
class FriendController {
  public async sendFriendRequest(req: Request, res: Response): Promise<void> {
    try {
      const { sentReqestId, userId } = req.body;
      const sendFriendRequest = await friendService.sendFriendRequest(req.body);
      return sendResponse(res, HttpStatus.OK, "Friend Request sent!", {
        result: sendFriendRequest,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getFiendsById(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const friends = await friendService.getFriendsById(req.body);
      return sendResponse(
        res,
        HttpStatus.OK,
        "Friends retrieved successfully!",
        {
          result: friends,
        }
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
}
export default new FriendController();
