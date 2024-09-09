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
  public async getAllComments(postId) {
    return await prisma.comment.findMany({
      where: {
        postId: postId,
        parentCommentId: null,
      },
    });
  }
  public async getAllReplies(parentCommentId) {
    return await prisma.comment.findMany({
      where: {
        parentCommentId: parentCommentId,
      },
    });
  }
}
export default new CommentRepository();
