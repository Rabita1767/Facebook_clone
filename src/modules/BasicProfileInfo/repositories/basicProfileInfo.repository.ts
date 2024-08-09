import { prisma } from "../../../config/prisma";

class BasicProfileInfoRepository {
  public async createBasicInfo(dob, gender, userId) {
    return await prisma.profileInformationBasic.create({
      data: {
        userId: userId,
        dob: dob,
        gender: gender,
      },
    });
  }

  public async updateBasicProfileInfo(data, userId) {
    return await prisma.profileInformationBasic.update({
      where: {
        userId: userId,
      },
      data: data,
    });
  }
}
export default new BasicProfileInfoRepository();
