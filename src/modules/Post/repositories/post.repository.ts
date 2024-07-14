import { prisma } from "../../../config/prisma";
class postRepository {
  public async findUserById(userid) {
    return await prisma.user.findUnique({
      where: {
        id: userid,
      },
    });
  }
  public async findPostById(postId) {
    return await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
  }
  public async createPost(payload, files) {
    console.log("repository layer", files);
    const mediaFiles = files.map((files) => files.filename);
    return prisma.post.create({
      data: {
        userId: payload.userId,
        content: payload.content,
        media: mediaFiles,
        privacy: payload.privacy,
        checkIn: payload.checkIn,
        lifeEvent: payload.lifeEvent,
      },
    });
  }
  public async updatePost(postId, updateParams) {
    return await prisma.post.update({
      where: {
        id: postId,
      },
      data: updateParams,
    });
  }
  public async getPostsById(userId) {
    return await prisma.post.findMany({
      where: {
        userId: userId,
      },
    });
  }
  public async setPostPrivacy(payload) {
    return await prisma.post.update({
      where: {
        id: payload.postId,
      },
      data: {
        privacy: payload.privacyType,
      },
    });
  }
  public async findPostByPostId(payload) {
    const { postId } = payload;
    return await prisma.post.findUnique({
      where: {
        id: postId
      }
    })
  }
}
export default new postRepository();
