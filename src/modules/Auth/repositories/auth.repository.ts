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
}
export default new AuthRepository();
