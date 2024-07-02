import BadRequestError from "../../../common/errors/http400Error";
import friendRepository from "../repositories/friend.repository";
import FriendRepository from "../repositories/friend.repository";
class FriendService {
  public async sendFriendRequest(payload) {
    const sendFriendRequest = await friendRepository.sendFriendRequest(payload);
    if (!sendFriendRequest) {
      throw new BadRequestError("Something went wrong!");
    }
    return sendFriendRequest;
  }
  public async getFriendsById(payload) {
    const getFriendsById = await FriendRepository.getFriendsById(payload);
    if (!getFriendsById) {
      throw new BadRequestError("Something went wrong!");
    }
    return getFriendsById;
  }
  public async acceptFriendRequest(payload) {
    const acceptFriendRequest = await friendRepository.acceptFriendRequest(
      payload
    );
    if (!acceptFriendRequest) {
      throw new BadRequestError("Something went wrong!");
    }
    return acceptFriendRequest;
  }
  public async getFriendRequestById(payload) {
    const getFriendRequestById = await friendRepository.getFriendRequestById(
      payload
    );
    if (!getFriendRequestById) {
      throw new BadRequestError("Something went wrong!");
    }
    return getFriendRequestById;
  }
}
export default new FriendService();
