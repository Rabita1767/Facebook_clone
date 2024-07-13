import { error } from "console";
import commentsRepository from "../repositories/comments.repository";
import BadRequestError from "../../../common/errors/http400Error";
import postRepository from "../../Post/repositories/post.repository";
import userRepository from "../../User/repositories/user.repository";

class CommentService {
    public async createComment(payload) {
        const { postId, userId, parentCommentId, content } = payload;
        const findPostByPostId = await postRepository.findPostById(postId);
        if (!findPostByPostId) {
            throw new BadRequestError("Post not found");
        }
        const findUserById = await userRepository.findUserById(userId);
        if (!findUserById) {
            throw new BadRequestError("User not found!");
        }
        if (parentCommentId) {
            const findParentComment = await commentsRepository.findCommentById(parentCommentId);
            if (!findParentComment) {
                throw new BadRequestError("Comment does not exist!");
            }
        }
        const createComment = await commentsRepository.createComment(payload);
        if (!createComment) {
            throw new BadRequestError("Something went wrong!");
        }
        return createComment;
    }

}
export default new CommentService();