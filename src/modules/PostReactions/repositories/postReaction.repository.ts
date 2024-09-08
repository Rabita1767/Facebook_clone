import { prisma } from "../../../config/prisma";

class postReactionRepository {
  public async givePostReaction(userId, data) {
    return await prisma.postReactions.create({
      data: {
        reactedBy: userId,
        postId: data.postId,
        type: data.type
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
  public async getAllCare(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "CARE"
      }
    })
  }
  public async getAllAngry(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "ANGRY"
      }
    })
  }
  public async getAllSad(payload) {
    return await prisma.postReactions.findMany({
      where: {
        postId: payload.postId,
        type: "SAD"
      }
    })
  }
}
export default new postReactionRepository();
