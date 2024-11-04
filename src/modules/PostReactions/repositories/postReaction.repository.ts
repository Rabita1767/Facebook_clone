import { prisma } from "../../../config/prisma";

class postReactionRepository {
  public async givePostReaction(userId, data) {
    return await prisma.postReactions.create({
      data: {
        reactedBy: userId,
        postId: data.postId,
        type: data.type,
      },
    });
  }
  public async removePostReaction(userId, id) {
    return await prisma.postReactions.update({
      where: {
        reactedBy: userId,
        id: id,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async getAllPostReaction(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
      },
    });
  }
  public async getAllLikes(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "LIKE",
      },
    });
  }
  public async getAllHearts(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "LOVE",
      },
    });
  }
  public async getAllHaha(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "HAHA",
      },
    });
  }
  public async getAllWow(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "WOW",
      },
    });
  }
  public async getAllCare(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "CARE",
      },
    });
  }
  public async getAllAngry(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "ANGRY",
      },
    });
  }
  public async getAllSad(postId) {
    return await prisma.postReactions.findMany({
      where: {
        postId: postId,
        type: "SAD",
      },
    });
  }
}
export default new postReactionRepository();
