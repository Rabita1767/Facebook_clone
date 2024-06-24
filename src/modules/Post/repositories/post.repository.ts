import { prisma } from "../../../config/prisma";
class postRepository {
  public async findUserById(userid) {
    return await prisma.user.findUnique({
      where: {
        id: userid,
      },
    });
  }
  public async createPost(payload) {
    return prisma.post.create({
      data: {
        userId: payload.userId,
        content: payload.content,
        media: payload.media,
        privacy: payload.privacy,
        checkIn: payload.checkIn,
        lifeEvent: payload.lifeEvent,
      },
    });
  }
  public async updatePost(userId, updateParams) {
    return await prisma.post.update({
      where: {
        userId: userId,
      },
      data: updateParams,
    });
  }
}
export default new postRepository();
