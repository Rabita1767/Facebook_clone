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
