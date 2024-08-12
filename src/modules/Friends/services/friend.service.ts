import { error } from "console";
import BadRequestError from "../../../common/errors/http400Error";
import HttpStatus from "../../../common/httpStatus";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import userRepository from "../../User/repositories/user.repository";
import friendRepository from "../repositories/friend.repository";
import FriendRepository from "../repositories/friend.repository";
class FriendService {
  public async sendFriendRequest(data, userId1) {
    const findReceiver = await userRepository.findUserById(data.userId2);
    if (findReceiver.friendRequestPrivacy === "PUBLIC") {
      const alreadySentRequest = await friendRepository.alreadySentRequest(
        data,
        userId1
      );
      const isCancelled = await friendRepository.isCancelled(data, userId1);
      if (isCancelled && !alreadySentRequest) {
        const sendFriendRequest = await friendRepository.sendFriendRequest(
          data,
          userId1
        );
        if (!sendFriendRequest) {
          throw new BadRequestError(message.SOMETHING_WENT_WRONG);
        }
        return sendFriendRequest;
      }
    } else {
      const acceptedFriendList = await friendRepository.acceptedFriendList(
        data
      );
      const sendFriendList = await friendRepository.sendFriendList(data);
      const findMutualFriend = await friendRepository.findMutualFriend(
        data,
        acceptedFriendList,
        sendFriendList
      );
      if (findMutualFriend > 0) {
        const sendFriendRequest = await friendRepository.sendFriendRequest(
          data,
          userId1
        );
        if (!sendFriendRequest) {
          throw new BadRequestError(message.SOMETHING_WENT_WRONG);
        }
        return sendFriendRequest;
      }
      throw new BadRequestError(message.CANT_SEND_FRIEND_REQUEST);
    }
  }
  public async acceptFriendRequest(data, userId2) {
    const acceptFriendRequest = await friendRepository.acceptFriendRequest(
      data,
      userId2
    );
    if (acceptFriendRequest.count === 0) {
      throw new BadRequestError(message.FRIEND_REQUEST_COULD_NOT_BE_ACCEPTED);
    }
    return acceptFriendRequest;
  }
  public async getAllFriends(userId) {
    const getAllFriends = await friendRepository.getAllFriends(userId);
    if (!getAllFriends) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return getAllFriends;
  }
}
export default new FriendService();
