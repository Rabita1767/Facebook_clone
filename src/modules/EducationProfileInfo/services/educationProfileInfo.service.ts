import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import educationProfileInfoRepository from "../repositories/educationProfileInfo.repository";
import educationInfo from "../types/educationProfileInfo.interface";

class EducationProfileInfoService {
  public async createEducationProfileInfo(data, userId) {
    const createEducationProfileInfo =
      await educationProfileInfoRepository.createEducationProfileInfo(
        data,
        userId
      );
    if (!createEducationProfileInfo) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return createEducationProfileInfo;
  }
  public async updateEducationProfileInfo(data) {
    const educationInfo: educationInfo = {};
    if (!data.id) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    } else {
      if (data.degreeName) {
        educationInfo.degreeName = data.degreeName;
      }
      if (data.institution) {
        educationInfo.institution = data.institution;
      }
      if (data.startedAt) {
        educationInfo.startedAt = data.startedAt;
      }
      if (data.endedAt) {
        educationInfo.endedAt = data.endedAt;
      }
      if (data.setPrivacy) {
        educationInfo.setPrivacy = data.setPrivacy;
      }

      const updateEducationProfileInfo =
        await educationProfileInfoRepository.updateEducationProfileInfo(
          educationInfo,
          data.id
        );
      if (!updateEducationProfileInfo) {
        throw new BadRequestError(message.SOMETHING_WENT_WRONG);
      }
      return updateEducationProfileInfo;
    }
  }
}
export default new EducationProfileInfoService();
