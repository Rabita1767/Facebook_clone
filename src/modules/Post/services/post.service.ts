import { IPOST, IUPDATEPOST } from "../types/post.interface";
import postRepository from "../repositories/post.repository";
import BadRequestError from "../../../common/errors/http400Error";
class postService {
  public async createPost(payload: IPOST) {
    const findUser = await postRepository.findUserById(payload.userId);
    if (!findUser) {
      throw new BadRequestError("User not found");
    }
    return findUser;
  }
  public async updatePost(payload: IPOST) {
    const findUser = await postRepository.findUserById(payload.userId);
    if (!findUser) {
      throw new BadRequestError("User not found");
    }
    const updateParams: IUPDATEPOST = {};
    if (payload.content) {
      updateParams.content = payload.content;
    } else if (payload.media) {
      updateParams.media = payload.media;
    } else if (payload.checkIn) {
      updateParams.checkIn = payload.checkIn;
    } else if (payload.lifeEvent) {
      updateParams.lifeEvent = payload.lifeEvent;
    } else if (payload.privacy) {
      payload.privacy = payload.privacy;
    }
    const updatePost = await postRepository.updatePost(
      payload.userId,
      updateParams
    );
    if (!updatePost) {
      throw new BadRequestError("Post not found");
    }
    return updatePost;
  }
}
export default new postService();
