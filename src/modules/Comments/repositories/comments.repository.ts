import { prisma } from "../../../config/prisma";

class CommentRepository {
    public async createComment(payload) {
        const { postId, userId, parentCommentId, content } = payload;
        return await prisma.comment.create({
            data: {
                commentBy: payload.userId,
                postId: payload.postId,
                parentCommentId: payload.parentCommentId,
                content: payload.content
            }
        })
    }
    public async findCommentById(commentId) {
        return await prisma.comment.findUnique({
            where: {
                id: commentId
            }
        })
    }

}
export default new CommentRepository();