import BadRequestError from "../../../common/errors/http400Error";
import postReactionRepository from "../repositories/postReaction.repository";

class postReactionService {
  public async givePostReaction(payload) {
    const givePostReaction = await postReactionRepository.givePostReaction(
      payload
    );
    if (!givePostReaction) {
      throw new BadRequestError("Something went wrong!Please Try again later");
    }
    return givePostReaction;
  }
  public async getAllPostReaction(payload) {
    const getAllPostReaction = await postReactionRepository.getAllPostReaction(
      payload
    );
    const getAllLikes = await postReactionRepository.getAllLikes(payload);
    const getAllHearts = await postReactionRepository.getAllHearts(payload);
    const getAllHaha = await postReactionRepository.getAllHaha(payload);
    const getAllWow = await postReactionRepository.getAllWow(payload);

    if (getAllPostReaction.length > 0) {
      return {
        totalReactions: getAllPostReaction,
        totalLikes: getAllLikes,
        totalHearts: getAllHearts,
        totalHaha: getAllHaha,
        totalWow: getAllWow,
      };
    } else {
      throw new BadRequestError("No posts found!");
    }
  }
}
export default new postReactionService();
