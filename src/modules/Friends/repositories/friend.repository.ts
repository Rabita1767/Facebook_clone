import { prisma } from "../../../config/prisma";
class FriendRepository {
  public async sendFriendRequest(payload) {
    return await prisma.friends.create({
      data: {
        friendOfId: payload.sentReqestId,
        friendId: payload.userId,
        hasSent: true,
        requestAccepted: false,
      },
    });
  }
}
export default new FriendRepository();
