import { IPOST, IUPDATEPOST } from "../types/post.interface";
import postRepository from "../repositories/post.repository";
import BadRequestError from "../../../common/errors/http400Error";
class postService {
  public async createPost(payload: IPOST, files) {
    const findUser = await postRepository.findUserById(payload.userId);
    if (!findUser) {
      throw new BadRequestError("User not found");
    }
    const createPost = await postRepository.createPost(payload, files);
    console.log("service layer", files);
    if (!createPost) {
      throw new BadRequestError("Post not found");
    }
    return createPost;
  }
  public async updatePost(payload: IPOST, file: any) {
    const findPost = await postRepository.findPostById(payload.postId);
    if (!findPost) {
      throw new BadRequestError("Post not found");
    }
    const updateParams: IUPDATEPOST = {};
    if (payload.content) {
      updateParams.content = payload.content;
    } else if (file) {
      updateParams.media = file.filename;
    } else if (payload.checkIn) {
      updateParams.checkIn = payload.checkIn;
    } else if (payload.lifeEvent) {
      updateParams.lifeEvent = payload.lifeEvent;
    } else if (payload.privacy) {
      payload.privacy = payload.privacy;
    }
    const updatePost = await postRepository.updatePost(
      payload.postId,
      updateParams
    );
    if (!updatePost) {
      throw new BadRequestError("Post not found");
    }
    return updatePost;
  }
  public async getPostsById(userId) {
    const getPostsById = await postRepository.getPostsById(userId);
    if (!getPostsById) {
      throw new BadRequestError("Something went wrong!Please Try again later");
    }
    return getPostsById;
  }
}
export default new postService();
