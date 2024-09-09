import { error } from "console";
import commentsRepository from "../repositories/comments.repository";
import BadRequestError from "../../../common/errors/http400Error";
import NotFoundError from "../../../common/errors/http404Error";
import postRepository from "../../Post/repositories/post.repository";
import userRepository from "../../User/repositories/user.repository";
import { message } from "../../../common/message";

class CommentService {
  public async createComment(userId, data) {
    const findPostByPostId = await postRepository.findPostById(data.postId);
    if (!findPostByPostId) {
      throw new NotFoundError(message.POST_NOT_FOUND);
    }
    const createComment = await commentsRepository.createComment(userId, data);
    if (!createComment) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return createComment;
  }
  public async createCommentReply(userId, data) {
    const findCommentById = await commentsRepository.findCommentById(
      data.parentCommentId
    );
    if (!findCommentById) {
      throw new NotFoundError(message.COMMENT_NOT_FOUND);
    }
    const createCommentReply = await commentsRepository.createCommentReply(
      userId,
      data
    );
    if (!createCommentReply) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return createCommentReply;
  }
  public async getAllComments(data) {
    const getAllComments = await commentsRepository.getAllComments(data.postId);
    if (!getAllComments) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return getAllComments;
  }
  public async getAllReplies(data) {
    const getAllReplies = await commentsRepository.getAllReplies(
      data.parentCommentId
    );
    if (!getAllReplies) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return getAllReplies;
  }
}
export default new CommentService();
