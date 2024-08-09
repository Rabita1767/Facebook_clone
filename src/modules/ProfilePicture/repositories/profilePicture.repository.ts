import { prisma } from "../../../config/prisma";

class profilePictureRepository {
  public async uploadProfilePicture(userId, file, data, postId) {
    return await prisma.profilePicture.create({
      data: {
        userId: userId,
        image: file.filename,
        content: data.content,
        postId: postId,
      },
    });
  }
  public async getAllProfilePictureById(userId) {
    return await prisma.profilePicture.findMany({
      where: {
        userId: userId,
        isDeleted: false,
      },
    });
  }
  public async removeProfilePicture(data) {
    return await prisma.profilePicture.update({
      where: {
        id: data.imageId,
      },
      data: {
        isDeleted: true,
      },
    });
  }
  public async setPrivacy(data) {
    return await prisma.profilePicture.update({
      where: {
        postId: data.postId,
      },
      data: {
        privacy: data.privacyType,
      },
    });
  }
}
export default new profilePictureRepository();
