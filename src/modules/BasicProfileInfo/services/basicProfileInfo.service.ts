import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import basicProfileInfoRepository from "../repositories/basicProfileInfo.repository";
import profileInfo from "../types/basicProfileInfo.interface";

class BasicProfileInfoService {
  public async updateBasicProfileInfo(data, userId) {
    const profileInfo: profileInfo = {};
    if (data.gender) {
      profileInfo.gender = data.gender;
    }
    if (data.genderPrivacy) {
      profileInfo.genderPrivacy = data.genderPrivacy;
    }
    if (data.relationshipStatus) {
      profileInfo.relationshipStatus = data.relationshipStatus;
    }
    if (data.relationPrivacy) {
      profileInfo.relationPrivacy = data.relationPrivacy;
    }
    const updateBasicProfileInfo =
      await basicProfileInfoRepository.updateBasicProfileInfo(
        profileInfo,
        userId
      );
    if (!updateBasicProfileInfo) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return updateBasicProfileInfo;
  }
}
export default new BasicProfileInfoService();
