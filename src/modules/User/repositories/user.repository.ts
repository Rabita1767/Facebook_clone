import { prisma } from "../../../config/prisma";
export class UserRepository {
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

  public async saveProfilePicture(user, file) {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        profilePic: file.filename,
      },
    });
  }
  public async saveCoverPhoto(user, file) {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        coverPhoto: file.filename,
      },
    });
  }
  public async createProfileInfo(payload) {
    return await prisma.profileInformationBasic.create({
      data: {
        gender: payload.gender,
        relationshipStatus: payload.relationshipStatus,
        userId: payload.userId,
      },
    });
  }

  public async createProfileInformationEducation(payload) {
    return await prisma.profileInformationEducation.create({
      data: {
        userId: payload.userId,
        degreeName: payload.degreeName,
        institution: payload.institution,
        startedAt: payload.startedAt,
        endedAt: payload.endedAt,
      },
    });
  }
  public async updateProfileInfo(updateParam, userId) {
    return await prisma.profileInformationBasic.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
  public async updateProfileInformationEducation(updateParam, userId) {
    return await prisma.profileInformationEducation.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
  public async createProfileInformationJobs(payload) {
    return await prisma.profileInformationJobs.create({
      data: {
        userId: payload.userId,
        designation: payload.designation,
        company: payload.company,
        startedAt: payload.startedAt,
        endedAt: payload.endedAt,
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
  public async createBio(payload) {
    return await prisma.user.update({
      where: {
        id: payload.userId,
      },
      data: {
        bio: payload.bio,
      },
    });
  }
  public async getUserInfoById(userId) {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
  public async checkIfFriends(payload) {
    return await prisma.friends.findMany({
      where: {
        AND: [
          { friendOfId: payload.profileUserId },
          { friendId: payload.userId },
        ],
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
  public async findAllFriends(payload) {
    return await prisma.friends.findMany({
      where: {
        friendOfId: payload.profileUserId,
      },
    });
  }
}
export default new UserRepository();
