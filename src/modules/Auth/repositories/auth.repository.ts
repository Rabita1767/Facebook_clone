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
}
export default new AuthRepository();
