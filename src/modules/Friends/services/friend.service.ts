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
}
export default new FriendService();
