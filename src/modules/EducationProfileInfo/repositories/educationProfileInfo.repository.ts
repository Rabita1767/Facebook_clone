import { prisma } from "../../../config/prisma";

class EducationProfileInfoRepository {
  public async createEducationProfileInfo(data, userId) {
    return await prisma.profileInformationEducation.create({
      data: {
        userId: userId,
        degreeName: data.degreeName,
        institution: data.institution,
        startedAt: data.startedAt,
        endedAt: data.endedAt,
      },
    });
  }
  public async updateEducationProfileInfo(data, documentId) {
    return await prisma.profileInformationEducation.update({
      where: {
        id: documentId,
      },
      data: data,
    });
  }
}
export default new EducationProfileInfoRepository();
