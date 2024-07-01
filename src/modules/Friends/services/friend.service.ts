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
}
export default new FriendService();
