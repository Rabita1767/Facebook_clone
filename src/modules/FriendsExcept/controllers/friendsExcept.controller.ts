import { Request, Response } from "express";
import sendResponse from "../../Auth/utils/response";
import friendsExceptService from "../services/friendsExcept.service";
import HttpStatus from "../../../common/httpStatus";
import { message } from "../../../common/message";
class FriendsExceptController {
    public async addFriendsExcept(req: Request, res: Response): Promise<void> {
        try {
            const addFriendsExcept = await friendsExceptService.addFriendsExcept(req.userId, req.body);
            return sendResponse(res, HttpStatus.OK, message.USER_ADDED_TO_THE_FRIENDS_EXCEPT_LIST, addFriendsExcept);

        } catch (error) {
            console.log(error);
            return sendResponse(res, error.statusCode, error);
        }
    }
    public async removeFromFriendsExcept(req: Request, res: Response): Promise<void> {
        try {
            const removeFromFriendsExcept = await friendsExceptService.removeFromFriendsExcept(req.userId, req.body);
            return sendResponse(res, HttpStatus.OK, message.REMOVED_FROM_FRIENDS_EXCEPT_LIST, removeFromFriendsExcept);

        } catch (error) {
            console.log(error);
            return sendResponse(res, error.statusCode, error);
        }
    }

}
export default new FriendsExceptController();