import { prisma } from "../../../config/prisma";
class FriendRepository {
  public async sendFriendRequest(data, userId1) {
    return await prisma.friends.create({
      data: {
        userId1: userId1,
        userId2: data.userId2,
        hasSent: true,
      },
    });
  }
  public async acceptedFriendList(data) {
    return await prisma.friends.findMany({
      where: {
        userId2: data.userId2,
        requestAccepted: true,
      },
    });
  }
  public async sendFriendList(data) {
    return await prisma.friends.findMany({
      where: {
        userId1: data.userId2,
        requestAccepted: true,
      },
    });
  }
  public async findMutualFriend(data, acceptedFriendList, sendFriendList) {
    return await prisma.friends.count({
      where: {
        OR: [
          {
            userId1: data.userId1,
            userId2: {
              in: [...acceptedFriendList, ...sendFriendList],
            },
          },
          {
            userId2: data.userId1,
            userId1: {
              in: [...acceptedFriendList, ...sendFriendList],
            },
          },
        ],
      },
    });
  }
  public async acceptFriendRequest(data, userId2) {
    console.log("userId1", data.userId1);
    console.log("userId2", userId2);
    return await prisma.friends.updateMany({
      where: {
        userId1: data.userId1,
        userId2: userId2,
      },
      data: {
        requestAccepted: true,
      },
    });
  }
  public async getAllFriends(userId) {
    return await prisma.friends.findMany({
      where: {
        OR: [{ userId1: userId }, { userId2: userId }],
      },
    });
  }
  public async alreadySentRequest(data, userId1) {
    return await prisma.friends.findFirst({
      where: {
        OR: [
          { userId1: userId1, userId2: data.userId2 },
          { userId1: data.userId2, userId2: userId1 },
        ],
      },
    });
  }
  public async isCancelled(data, userId1) {
    return await prisma.friends.findFirst({
      where: {
        OR: [
          { userId1: userId1, userId2: data.userId2, isCancelled: true },
          { userId1: data.userId2, userId2: userId1, isCancelled: true },
        ],
      },
    });
  }
}
export default new FriendRepository();
