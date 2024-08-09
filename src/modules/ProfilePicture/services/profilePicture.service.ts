import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import postRepository from "../../Post/repositories/post.repository";
import profilePictureRepository from "../repositories/profilePicture.repository";
import coverPhotoRepository from "../repositories/profilePicture.repository";

class profilePictureService {
  public async uploadProfilePicture(userId, file, data) {
    const uploadProfilePost = await postRepository.uploadProfilePost(
      userId,
      file,
      data
    );
    const uploadProfilePicture =
      await profilePictureRepository.uploadProfilePicture(
        userId,
        file,
        data,
        uploadProfilePost.id
      );
    if (!uploadProfilePicture || !uploadProfilePost) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return uploadProfilePicture;
  }
  public async getAllProfilePictureById(userId) {
    const getAllProfilePictureById =
      await profilePictureRepository.getAllProfilePictureById(userId);
    if (!getAllProfilePictureById) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return getAllProfilePictureById;
  }
  public async removeProfilePicture(data) {
    const removeProfilePicture =
      await profilePictureRepository.removeProfilePicture(data);
    const removeProfilePost = await postRepository.removeProfilePost(data);
    if (!removeProfilePicture || !removeProfilePost) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return removeProfilePicture;
  }
  public async setPrivacy(data) {
    const setPrivacy = await profilePictureRepository.setPrivacy(data);
    const setPostPrivacy = await postRepository.setPostPrivacy(data);
    if (!setPrivacy || !setPostPrivacy) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return setPrivacy;
  }
}
export default new profilePictureService();
