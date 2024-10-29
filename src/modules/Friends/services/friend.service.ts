import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import userRepository from "../../User/repositories/user.repository";
import friendRepository from "../repositories/friend.repository";
import redisClient from "../../../redisClient";
class FriendService {
  public async sendFriendRequest(data, userId1) {
    const findReceiver = await userRepository.findUserById(data.userId2);
    if (findReceiver.friendRequestPrivacy === "PUBLIC") {
      const alreadySentRequest = await friendRepository.alreadySentRequest(
        data,
        userId1
      );
      if (
        alreadySentRequest !== null &&
        (alreadySentRequest.isCancelled === true ||
          alreadySentRequest.removedFromList === true)
      ) {
        const sendFriendRequest = await friendRepository.updateFriendRequest(
          data,
          userId1
        );
        if (sendFriendRequest.count === 0) {
          throw new BadRequestError(message.SOMETHING_WENT_WRONG);
        }
        return sendFriendRequest;
      } else if (alreadySentRequest === null) {
        const sendFriendRequest = await friendRepository.sendFriendRequest(
          data,
          userId1
        );
        if (!sendFriendRequest) {
          throw new BadRequestError(message.SOMETHING_WENT_WRONG);
        }
        return sendFriendRequest;
      }
      throw new BadRequestError(message.FRIEND_REQUEST_HAS_ALREADY_BEEN_SENT);
      // const isCancelled = await friendRepository.isCancelled(data, userId1);
    } else {
      const acceptedFriendList = await friendRepository.acceptedFriendList(
        data.userId2
      );
      const sendFriendList = await friendRepository.sendFriendList(
        data.userId2
      );
      const userId1Array = acceptedFriendList.map((friend) => friend.userId1);
      const userId2Array = sendFriendList.map((friend) => friend.userId2);
      const findMutualFriend = await friendRepository.findMutualFriend(
        data.userId1,
        userId1Array,
        userId2Array
      );
      if (findMutualFriend > 0) {
        const alreadySentRequest = await friendRepository.alreadySentRequest(
          data,
          userId1
        );
        if (
          alreadySentRequest !== null &&
          (alreadySentRequest.isCancelled === true ||
            alreadySentRequest.removedFromList === true)
        ) {
          const sendFriendRequest = await friendRepository.updateFriendRequest(
            data,
            userId1
          );
          if (sendFriendRequest.count === 0) {
            throw new BadRequestError(message.SOMETHING_WENT_WRONG);
          }
          return sendFriendRequest;
        } else if (alreadySentRequest === null) {
          const sendFriendRequest = await friendRepository.sendFriendRequest(
            data,
            userId1
          );
          if (!sendFriendRequest) {
            throw new BadRequestError(message.SOMETHING_WENT_WRONG);
          }
          return sendFriendRequest;
        }
        throw new BadRequestError(message.FRIEND_REQUEST_HAS_ALREADY_BEEN_SENT);
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
    const catchedData = await redisClient.get("getAllFriends");
    if (!catchedData) {
      const getAllFriends = await friendRepository.getAllFriends(userId);
      if (!getAllFriends) {
        throw new BadRequestError(message.SOMETHING_WENT_WRONG);
      }
      await redisClient.set("getAllFriends", JSON.stringify(getAllFriends));
      return getAllFriends;
    }
    return JSON.parse(catchedData);
  }
  public async cancelRequest(data, userId) {
    const findRequest = await friendRepository.findRequest(data, userId);
    if (findRequest.requestAccepted === false) {
      const cancelRequest = await friendRepository.cancelRequest(data, userId);
      if (cancelRequest.count == 0) {
        throw new BadRequestError(message.SOMETHING_WENT_WRONG);
      }
      return cancelRequest;
    } else {
      throw new BadRequestError(message.CANT_CANCEL_FRIEND_REQUEST);
    }
  }
  public async removeFromFriendList(userId, data) {
    const findInfo = await friendRepository.findIfFriends(
      userId,
      data.friendId
    );
    if (findInfo && findInfo.removedFromList === false) {
      findInfo.removedFromList = true;
      return findInfo;
    }
    throw new BadRequestError(message.SOMETHING_WENT_WRONG);
  }
}
export default new FriendService();
