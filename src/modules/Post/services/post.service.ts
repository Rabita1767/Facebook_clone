import { IPOST, IUPDATEPOST } from "../types/post.interface";
import postRepository from "../repositories/post.repository";
import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import friendRepository from "../../Friends/repositories/friend.repository";
class postService {
  public async createPost(userId, payload: IPOST, files) {
    const createPost = await postRepository.createPost(userId, payload, files);
    console.log("service layer", files);
    if (!createPost) {
      throw new BadRequestError("Post not found");
    }
    return createPost;
  }
  public async updatePost(payload: IPOST, file: any) {
    const findPost = await postRepository.findPostById(payload.postId);
    if (!findPost) {
      throw new BadRequestError(message.POST_NOT_FOUND);
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

  public async setPostPrivacy(payload) {
    const setPostPrivacy = await postRepository.setPostPrivacy(payload);
    if (!setPostPrivacy) {
      throw new BadRequestError("Something went wrong!Please Try again later");
    }
    return setPostPrivacy;
  }
  public async findPostByPostId(payload) {
    const findPostByPostId = await postRepository.findPostByPostId(payload);
    if (!findPostByPostId) {
      throw new BadRequestError("Post does not exist!");
    }
    return findPostByPostId;
  }
  public async deletePostById(postId) {
    const deletePostById = await postRepository.deletePostById(postId);
    if (!deletePostById) {
      throw new BadRequestError("Something went wrong!");
    }
    return deletePostById;
  }
  public async getPostsById(userId, data) {
    if (userId === data.userId) {
      const getPostsById = await postRepository.getPostsById(userId);
      return getPostsById;
    }
    const findIfFriends = await friendRepository.findIfFriends(
      userId,
      data.userId
    );
    if (findIfFriends !== null) {
      const getPostsById = await postRepository.getPostsByIfFriends(userId);
      return getPostsById;
    }
    const acceptedFriendList = await friendRepository.acceptedFriendList(
      data.userId
    );
    const sendFriendList = await friendRepository.sendFriendList(data.userId);
    const findIfMutualFriend = await friendRepository.findMutualFriend(
      userId,
      acceptedFriendList,
      sendFriendList
    );
    if (findIfMutualFriend > 0) {
      const getPostsById = await postRepository.getPostsByIdFriendsOfFriends(
        data.userId
      );
      return getPostsById;
    }
    const getPostsById = await postRepository.getPostsByIdPublic(data.userId);
  }
}
export default new postService();
