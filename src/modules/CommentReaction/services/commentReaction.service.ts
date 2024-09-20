import BadRequestError from "../../../common/errors/http400Error";
import NotFoundError from "../../../common/errors/http404Error";
import { message } from "../../../common/message";
import commentsRepository from "../../Comments/repositories/comments.repository";
import commentReactionRepository from "../repositories/commentReaction.repository";

class CommentReactionService {
  async giveCommentReaction(userId, data) {
    const findCommentById = await commentsRepository.findCommentById(
      data.commentId
    );
    if (!findCommentById) {
      throw new NotFoundError(message.COMMENT_NOT_FOUND);
    }
    const giveCommentReaction =
      await commentReactionRepository.giveCommentReaction(userId, data);
    if (!giveCommentReaction) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return giveCommentReaction;
  }
}
export default new CommentReactionService();
