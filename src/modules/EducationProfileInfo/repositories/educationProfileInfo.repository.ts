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
        setPrivacy: data.setPrivacy,
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
  public async deleteEducationProfileInfo(data) {
    return prisma.profileInformationEducation.update({
      where: {
        id: data.id,
      },
      data: {
        isDeleted: true,
      },
    });
  }
}
export default new EducationProfileInfoRepository();
