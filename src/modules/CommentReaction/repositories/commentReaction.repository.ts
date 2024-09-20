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
}
export default new CommentReactionRepository();
