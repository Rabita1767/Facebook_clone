import { prisma } from "../../../config/prisma";
class UserRepository {
  public async createUser(authId) {
    return await prisma.user.create({
      data: {
        authId: authId,
      },
    });
  }
  public async findUserByEmail(email: string) {
    return await prisma.auth.findUnique({
      where: {
        email: email,
      },
    });
  }
  public async findUserById(userId) {
    console.log("repo", userId);
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  public async updateProfileInformationJobs(updateParam, userId) {
    return await prisma.profileInformationJobs.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
  public async createProfileInformationBooks(payload) {
    return await prisma.profileInformationBooks.create({
      data: {
        userId: payload.userId,
        bookName: payload.bookName,
      },
    });
  }
  public async updateProfileInformationMovies(updateParam, userId) {
    return await prisma.profileInformationMovies.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
  public async createProfileInformationMusic(payload) {
    return await prisma.profileInformationMusic.create({
      data: {
        userId: payload.userId,
        music: payload.music,
      },
    });
  }
  public async updateProfileInformationMusic(updateParam, userId) {
    return await prisma.profileInformationMusic.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
  public async getUserInfoById(userId) {
    return await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        auth: true,
        Post: true,
        Friends: true,
        FriendOf: true,
      },
    });
  }

  public async showFriendsPost(payload) {
    return await prisma.post.findMany({
      where: {
        userId: payload.profileUserId,
        privacy: {
          in: ["FRIENDS", "FRIENDS_OF_FRIENDS", "PUBLIC"],
        },
      },
    });
  }
  public async showFriendsOfFriendsPost(payload) {
    return await prisma.post.findMany({
      where: {
        userId: payload.profileUserId,
        privacy: {
          in: ["FRIENDS_OF_FRIENDS", "PUBLIC"],
        },
      },
    });
  }
  public async showPublicPost(payload) {
    return await prisma.post.findMany({
      where: {
        AND: [{ userId: payload.profileUserId }, { privacy: "PUBLIC" }],
      },
    });
  }

  public async setBio(userId, bio) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        bio: bio,
      },
    });
  }
}
export default new UserRepository();
