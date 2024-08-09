import { prisma } from "../../../config/prisma";

class coverPhotoRepository {
  public async uploadCoverPhoto(userId, file, data, postId) {
    return await prisma.coverPhoto.create({
      data: {
        userId: userId,
        image: file.filename,
        content: data.content,
        postId: postId,
      },
    });
  }
  public async getAllCoverPhotoById(userId) {
    return await prisma.coverPhoto.findMany({
      where: {
        userId: userId,
        isDeleted: false,
      },
    });
  }
  public async removeCoverPhoto(data) {
    return await prisma.coverPhoto.update({
      where: {
        id: data.imageId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async setPrivacy(data) {
    return await prisma.coverPhoto.update({
      where: {
        postId: data.postId,
      },
      data: {
        privacy: data.privacyType,
      },
    });
  }
}
export default new coverPhotoRepository();
