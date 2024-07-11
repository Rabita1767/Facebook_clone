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
  public async getAllLikes(payload) {
    const { postId } = payload;
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "LIKE",
      },
    });
  }
  public async getAllHearts(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "LOVE",
      },
    });
  }
  public async getAllHaha(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "HAHA",
      },
    });
  }
  public async getAllWow(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "WOW",
      },
    });
  }
}
export default new postReactionRepository();
