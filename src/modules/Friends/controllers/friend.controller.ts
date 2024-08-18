import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import HttpStatus from "../../../common/httpStatus";
import friendService from "../services/friend.service";
import { message } from "../../../common/message";
import { send } from "process";
class FriendController {
  public async sendFriendRequest(req: Request, res: Response): Promise<void> {
    try {
      const sendFriendRequest = await friendService.sendFriendRequest(
        req.body,
        req.userId
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.FRIEND_REQUEST_SENT_SUCCESSFULLY,
        sendFriendRequest
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async acceptFriendRequest(req: Request, res: Response): Promise<void> {
    try {
      const acceptFriendRequest = await friendService.acceptFriendRequest(
        req.body,
        req.userId
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        message.FRIEND_REQUEST_HAS_BEEN_ACCEPTED_SUCCESSFULLY,
        acceptFriendRequest
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async getAllFriends(req: Request, res: Response): Promise<void> {
    try {
      const getAllFriends = await friendService.getAllFriends(req.userId);
      return sendResponse(
        res,
        HttpStatus.OK,
        message.FRIEND_LIST_HAS_BEEN_FETCHED_SUCCESSFULLY,
        getAllFriends
      );
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async cancelRequest(req: Request, res: Response): Promise<void> {
    const cancelRequest = await friendService.cancelRequest(
      req.body,
      req.userId
    );
    return sendResponse(
      res,
      HttpStatus.OK,
      message.REQUEST_CANCELLED_SUCCESSFULLY,
      cancelRequest
    );
  }
  public async removeFromFriendList(req: Request, res: Response): Promise<void> {
    try {
      const removeFromFriendList = await friendService.removeFromFriendList(req.userId, req.body);
      return sendResponse(res, HttpStatus.OK, message.FRIEND_HAS_BEEN_REMOVED_SUCCESSFULLY, removeFromFriendList);
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error)
    }
  }
}
export default new FriendController();
