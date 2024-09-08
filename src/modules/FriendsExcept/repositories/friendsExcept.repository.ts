import { prisma } from "../../../config/prisma";


class FriendsExceptRepository {
    public async addFriendsExcept(userId, friendId) {
        return await prisma.friendsExcept.create({
            data: {
                userId: userId,
                friendsId: friendId
            }
        })
    }
    public async removeFromFriendsExcept(id) {
        return await prisma.friendsExcept.update({
            where: {
                id: id
            },
            data: {
                isdeleted: true
            }
        })
    }

}
export default new FriendsExceptRepository();