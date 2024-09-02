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
  public async createPost(userId, payload, files) {
    console.log("repository layer", files);
    const mediaFiles = files.map((files) => files.filename);
    return prisma.post.create({
      data: {
        userId: userId,
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
  public async setPostPrivacy(data) {
    return await prisma.post.update({
      where: {
        id: data.postId,
      },
      data: {
        privacy: data.privacyType,
      },
    });
  }
  public async findPostByPostId(payload) {
    const { postId } = payload;
    return await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
  }
  public async deletePostById(postId) {
    return await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async uploadCoverPost(userId, file, data) {
    return await prisma.post.create({
      data: {
        userId: userId,
        media: file.filename,
        content: data.content,
        postType: "COVERPHOTO",
      },
    });
  }
  public async removeCoverPost(data) {
    return await prisma.post.update({
      where: {
        id: data.postId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async uploadProfilePost(userId, file, data) {
    return await prisma.post.create({
      data: {
        userId: userId,
        media: file.filename,
        content: data.content,
      },
    });
  }
  public async removeProfilePost(data) {
    return await prisma.post.update({
      where: {
        id: data.postId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async getPostsById(userId) {
    return await prisma.post.findMany({
      where: {
        userId: userId,
      },
    });
  }
  public async getPostsByIfFriends(userId) {
    return await prisma.post.findMany({
      where: {
        userId: userId,
        privacy: {
          in: ["PUBLIC", "FRIENDS", "FRIENDS_OF_FRIENDS"],
        },
      },
    });
  }
  public async getPostsByIdFriendsOfFriends(userId) {
    return await prisma.post.findMany({
      where: {
        userId: userId,
        privacy: {
          in: ["PUBLIC", "FRIENDS_OF_FRIENDS"],
        },
      },
    });
  }
  public async getPostsByIdPublic(userId) {
    return await prisma.post.findMany({
      where: {
        userId: userId,
        privacy: "PUBLIC",
      },
    });
  }
}
export default new postRepository();
