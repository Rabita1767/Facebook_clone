import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import friendRepository from "../../Friends/repositories/friend.repository";
import friendsExceptController from "../controllers/friendsExcept.controller";
import friendsExceptRepository from "../repositories/friendsExcept.repository";

class FriendsExceptService {
    public async addFriendsExcept(userId, data) {
        const findIfFriends = await friendRepository.findIfFriends(userId, data.friendId);
        if (findIfFriends !== null) {
            const addFriendsExcept = await friendsExceptRepository.addFriendsExcept(userId, data.friendId);
            if (!addFriendsExcept) {
                throw new BadRequestError(message.SOMETHING_WENT_WRONG);
            }
            return addFriendsExcept;
        }
        throw new BadRequestError(message.CANT_BE_ADDED_TO_THE_LIST);

    }
    public async removeFromFriendsExcept(data) {
        const removeFromFriendsExcept = await friendsExceptRepository.removeFromFriendsExcept(data.id);
        if (!removeFromFriendsExcept) {
            throw new BadRequestError(message.SOMETHING_WENT_WRONG);
        }
        return removeFromFriendsExcept;
    }

}
export default new FriendsExceptService();