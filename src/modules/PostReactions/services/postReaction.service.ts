import { io } from "../../..";
import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import postRepository from "../../Post/repositories/post.repository";
import postReactionRepository from "../repositories/postReaction.repository";

class postReactionService {
  public async givePostReaction(userId, data) {
    const givePostReaction = await postReactionRepository.givePostReaction(
      userId,
      data
    );
    if (!givePostReaction) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    // io.emit("give_post_reaction", givePostReaction);
    // const findPostById = await postRepository.findPostById(
    //   givePostReaction.postId
    // );
    // const postOwnerId = findPostById.userId;
    // io.to(postOwnerId).emit("postReaction", {
    //   message: "Your post received a new reaction!",
    //   postId: givePostReaction.postId,
    //   reactedBy: userId,
    // });
    // console.log("givePostReaction", findPostById);
    return givePostReaction;
  }
  public async removePostReaction(userId, data) {
    const removePostReaction = await postReactionRepository.removePostReaction(
      userId,
      data.id
    );
    if (!removePostReaction) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return removePostReaction;
  }
  public async getAllPostReaction(data) {
    const getAllPostReaction = await postReactionRepository.getAllPostReaction(
      data.postId
    );
    const getAllLikes = await postReactionRepository.getAllLikes(data.postId);
    const getAllHearts = await postReactionRepository.getAllHearts(data.postId);
    const getAllHaha = await postReactionRepository.getAllHaha(data.postId);
    const getAllWow = await postReactionRepository.getAllWow(data.postId);
    const getAllCare = await postReactionRepository.getAllCare(data.postId);
    const getAllAngry = await postReactionRepository.getAllAngry(data.postId);
    const getAllSad = await postReactionRepository.getAllSad(data.postId);

    if (!getAllPostReaction) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return {
      totalReactions: getAllPostReaction,
      totalLikes: getAllLikes,
      totalHearts: getAllHearts,
      totalHaha: getAllHaha,
      totalWow: getAllWow,
      totalCare: getAllCare,
      totalAngry: getAllAngry,
      totalSad: getAllSad,
    };
  }
}
export default new postReactionService();
