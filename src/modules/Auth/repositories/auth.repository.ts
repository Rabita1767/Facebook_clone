import { Prisma } from "@prisma/client";
import { prisma } from "../../../config/prisma";
class AuthRepository {
  public async createAuth(user: Prisma.AuthCreateInput) {
    console.log("name", user.name);
    const Date_Of_Birth = new Date(user.dob);
    console.log("Date_Of_Birth", Date_Of_Birth);
    return await prisma.auth.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        dob: Date_Of_Birth,
        gender: user.gender,
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
}
export default new AuthRepository();
