import { Prisma } from "@prisma/client";
import { prisma } from "../../../config/prisma";
class AuthRepository {
  public async createAuth(user: Prisma.AuthCreateInput) {
    console.log("name", user.name);
    return await prisma.auth.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        Dob: user.Dob,
      },
    });
  }
  public async createUser(authId: string) {
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
  public async updateProfileInfo(updateParam, userId) {
    return await prisma.profileInformationBasic.update({
      where: {
        userId: userId,
      },
      data: updateParam,
    });
  }
}
export default new AuthRepository();
