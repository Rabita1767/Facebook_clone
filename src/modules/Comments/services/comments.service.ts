import { error } from "console";
import commentsRepository from "../repositories/comments.repository";
import BadRequestError from "../../../common/errors/http400Error";
import postRepository from "../../Post/repositories/post.repository";
import userRepository from "../../User/repositories/user.repository";

class CommentService {
  public async createComment(payload) {
    const { postId, userId, parentCommentId, content } = payload;
    const findPostByPostId = await postRepository.findPostById(postId);
    if (!findPostByPostId) {
      throw new BadRequestError("Post not found");
    }
    const findUserById = await userRepository.findUserById(userId);
    if (!findUserById) {
      throw new BadRequestError("User not found!");
    }
    if (parentCommentId) {
      const findParentComment = await commentsRepository.findCommentById(
        parentCommentId
      );
      if (!findParentComment) {
        throw new BadRequestError("Comment does not exist!");
      }
    }
    const createComment = await commentsRepository.createComment(payload);
    if (!createComment) {
      throw new BadRequestError("Something went wrong!");
    }
    return createComment;
  }
  public async getAllComments(payload) {
    const getAllComments = await commentsRepository.getAllComments(payload);
    if (getAllComments.length == 0) {
      throw new BadRequestError("No comments found!");
    }
    return getAllComments;
  }
  public async getAllReplies(payload) {
    const findCommentById = await commentsRepository.findCommentById(payload);
    if (!findCommentById) {
      throw new BadRequestError("Comment does not exist!");
    }
    const getAllReplies = await commentsRepository.getAllReplies(payload);
  }
}
export default new CommentService();
