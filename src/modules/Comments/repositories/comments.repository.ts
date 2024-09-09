import { prisma } from "../../../config/prisma";

class CommentRepository {
  public async createComment(userId, data) {
    return await prisma.comment.create({
      data: {
        commentBy: userId,
        postId: data.postId,
        content: data.content,
      },
    });
  }
  public async createCommentReply(userId, data) {
    return await prisma.comment.create({
      data: {
        commentBy: userId,
        postId: data.postId,
        content: data.content,
        parentCommentId: data.parentCommentId,
      },
    });
  }
  public async findCommentById(commentId) {
    return await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });
  }
  public async getAllComments(payload) {
    const { postId } = payload;
    return await prisma.comment.findMany({
      where: {
        id: postId,
        parentCommentId: null,
      },
    });
  }
  public async getAllReplies(payload) {
    const { parentCommentId } = payload;
    return await prisma.comment.findMany({
      where: {
        parentCommentId: parentCommentId,
      },
    });
  }
}
export default new CommentRepository();
