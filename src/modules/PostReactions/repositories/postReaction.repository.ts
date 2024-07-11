import { prisma } from "../../../config/prisma";

class postReactionRepository {
  public async givePostReaction(payload) {
    const { postId, reactedBy, type, postedBy } = payload;
    return await prisma.postReactions.create({
      data: {
        reactedBy: payload.reactedBy,
        postedBy: payload.postedBy,
        type: payload.type,
        postId: payload.postId,
      },
    });
  }
  public async getAllPostReaction(payload) {
    const { postId } = payload;
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
      },
    });
  }
}
export default new postReactionRepository();
