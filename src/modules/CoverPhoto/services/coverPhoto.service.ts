import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import postRepository from "../../Post/repositories/post.repository";
import coverPhotoRepository from "../repositories/coverPhoto.repository";

class coverPhotoService {
  public async uploadCoverPhoto(userId, file, data) {
    const uploadCoverPost = await postRepository.uploadCoverPost(
      userId,
      file,
      data
    );
    const uploadCoverPhoto = await coverPhotoRepository.uploadCoverPhoto(
      userId,
      file,
      data,
      uploadCoverPost.id
    );
    if (!uploadCoverPhoto || !uploadCoverPost) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return uploadCoverPhoto;
  }
  public async getAllCoverPhotoById(userId) {
    const getAllCoverPhotoById =
      await coverPhotoRepository.getAllCoverPhotoById(userId);
    if (!getAllCoverPhotoById) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return getAllCoverPhotoById;
  }
  public async removeCoverPhoto(data) {
    const removeCoverPhoto = await coverPhotoRepository.removeCoverPhoto(data);
    const removeCoverPost = await postRepository.removeCoverPost(data);
    if (!removeCoverPhoto || !removeCoverPost) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return removeCoverPhoto;
  }
  public async setPrivacy(data) {
    const setPrivacy = await coverPhotoRepository.setPrivacy(data);
    const setPostPrivacy = await postRepository.setPostPrivacy(data);
    if (!setPrivacy || !setPostPrivacy) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return setPrivacy;
  }
}
export default new coverPhotoService();
