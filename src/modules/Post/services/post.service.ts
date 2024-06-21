import IPOST from "../types/post.interface";
import postRepository from "../repositories/post.repository";
class postService {
  public async createPost(payload: IPOST) {
    const findUser = await postRepository.findUserById(payload.userId);
  }
}
export default new postService();
