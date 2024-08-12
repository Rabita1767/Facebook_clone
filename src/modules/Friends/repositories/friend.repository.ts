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
    return await prisma.friends.update({
      where: {
        userId1: data.userId1,
        userId2: userId2,
      },
      data: {
        requestAccepted: true,
      },
    });
  }
}
export default new FriendRepository();
