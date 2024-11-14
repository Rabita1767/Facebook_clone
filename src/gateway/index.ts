import { io } from "..";
import { message } from "../common/message";
import friendService from "../modules/Friends/services/friend.service";
import postService from "../modules/Post/services/post.service";
import postReactionService from "../modules/PostReactions/services/postReaction.service";
import userRepository from "../modules/User/repositories/user.repository";

const SocketGateway = (socket) => {
  socket.on("give_post_reaction", async (userId, data) => {
    try {
      console.log(userId, data);
      const givePostReaction = await postReactionService.givePostReaction(
        userId,
        data
      );
      const findPostById = await postService.findPostByPostId(
        givePostReaction.postId
      );
      const postOwnerId = findPostById.userId;
      const userInfo = await userRepository.getUserInfoById(
        givePostReaction.reactedBy
      );
      const reactedBy = userInfo.auth.name;
      io.to(postOwnerId).emit("post_reaction_notification", {
        ...givePostReaction,
        message: `${reactedBy} has reacted to your post`,
      });
    } catch (error) {
      console.log(error);
      socket.emit("error", { message: message.INTERNAL_SERVER_ERROR });
    }
  });
  socket.on("send_friend_request", async (data, userId1) => {
    try {
      const sendFriendRequest = await friendService.sendFriendRequest(
        data,
        userId1
      );
      const userInfo = await userRepository.getUserInfoById(userId1);
      const sender = userInfo?.auth?.name;
      io.to(data.userId2).emit("send_request_notification", {
        ...sendFriendRequest,
        message: `${sender} has sent you a friend request`,
      });
    } catch (error) {
      console.log(error);
      socket.emit("error", { message: message.INTERNAL_SERVER_ERROR });
    }
  });
};
export default SocketGateway;
