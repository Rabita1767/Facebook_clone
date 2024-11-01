import { prisma } from "../../../config/prisma";

class CommentReactionRepository {
  async giveCommentReaction(userId, data) {
    return await prisma.commentReactions.create({
      data: {
        reactedBy: userId,
        commentId: data.commentId,
        reactionType: data.reactionType,
      },
    });
  }
  public async removeCommentReaction(userId, commentId) {
    return await prisma.commentReactions.update({
      where: {
        reactedBy: userId,
        commentId: commentId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
}
export default new CommentReactionRepository();
