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
  public async getFriendsById(payload) {
    return await prisma.friends.findMany({
      where: {
        AND: [{ friendOfId: payload.userId }, { requestAccepted: true }],
      },
    });
  }
  // public async acceptFriendRequest(payload) {
  //   return await prisma.friends.update({
  //     where: {
  //       AND: [
  //         {
  //           friendOfId: payload.sentRequestId,
  //         },
  //         {
  //           friendId: payload.userId,
  //         },
  //       ],
  //     },
  //     data: {
  //       requestAccepted: true,
  //     },
  //   });
  // }
  public async acceptFriendRequest(payload) {
    const { sentRequestId, userId } = payload;

    return await prisma.friends.updateMany({
      where: {
        AND: [{ friendOfId: sentRequestId }, { friendId: userId }],
      },
      data: {
        requestAccepted: true,
      },
    });
  }
  public async getFriendRequestById(payload) {
    return await prisma.friends.findMany({
      where: {
        AND: [
          {
            friendOfId: payload.userId,
          },
          { requestAccepted: false },
        ],
      },
    });
  }
}
export default new FriendRepository();
