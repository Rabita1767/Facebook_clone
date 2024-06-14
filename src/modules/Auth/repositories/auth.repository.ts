import { Prisma } from "@prisma/client";
import { prisma } from "../../../config/prisma";
class AuthRepository {
  public async createUser(user: Prisma.AuthCreateInput) {
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
  public async createAuth(authId: string) {
    return await prisma.user.create({
      data: {
        authId: authId,
      },
    });
  }
  public async findUserByEmail(email: string) {
    return await prisma.auth.findUnique({
      where: {
        email,
      },
    });
  }
}
export default new AuthRepository();
