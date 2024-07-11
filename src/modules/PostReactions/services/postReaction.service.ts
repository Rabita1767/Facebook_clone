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
}
export default new postReactionService();
