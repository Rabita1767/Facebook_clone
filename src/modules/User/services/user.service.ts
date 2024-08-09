import BadRequestError from "../../../common/errors/http400Error";
import { message } from "../../../common/message";
import sendResponse from "../../Auth/utils/response";
import userRepository from "../repositories/user.repository";
import UserRepository from "../repositories/user.repository";
import IUPDATEPARAMS from "../types/user.interface";
import IEDUCATIONUPDATEPARAMS from "../types/user.interface";
import IJOBSUPDATEPARAMS from "../types/user.interface";
import IMOVIESUPDATEPARAMS from "../types/user.interface";
import IMUSICUPDATEPARAMS from "../types/user.interface";
class UserService {
  async findUserById(userId) {
    console.log("user", userId);
    const findUser = await UserRepository.findUserById(userId);
    if (!findUser) {
      throw new BadRequestError("User not found!");
    }
    return findUser;
  }
  async findUserByEmail(email) {
    const findUser = await UserRepository.findUserByEmail(email);
    if (!findUser) {
      throw new BadRequestError("User not found!");
    } else {
      return findUser;
    }
  }

  async createProfileInfo(payload) {
    const createProfileInfo = await UserRepository.createProfileInfo(payload);
    if (!createProfileInfo) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInfo;
  }
  async createProfileInformationEducation(payload) {
    const createProfileInformationEducation =
      await UserRepository.createProfileInformationEducation(payload);
    if (!createProfileInformationEducation) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInformationEducation;
  }
  async updateProfileInfo(payload) {
    const updateParam: IUPDATEPARAMS = {};
    if (payload.gender) {
      updateParam.gender = payload.gender;
    } else if (payload.relationshipStatus) {
      updateParam.relationshipStatus = payload.relationshipStatus;
    }
    const updateProfileInfo = await UserRepository.updateProfileInfo(
      updateParam,
      payload.userId
    );
    if (!updateProfileInfo) {
      throw new BadRequestError("Something went wrong!");
    }
    return updateProfileInfo;
  }
  public async updateProfileInformationEducation(payload) {
    const updateParam: IEDUCATIONUPDATEPARAMS = {};
    if (payload.degreeName) {
      updateParam.degreeName = payload.degreeName;
    } else if (payload.institution) {
      updateParam.institution = payload.institution;
    } else if (payload.startedAt) {
      updateParam.startedAt = payload.startedAt;
    } else if (payload.endedAt) {
      updateParam.endedAt = payload.endedAt;
    }
    const updateProfileInformationEducation =
      await UserRepository.updateProfileInformationEducation(
        updateParam,
        payload.userId
      );
    if (!updateProfileInformationEducation) {
      throw new BadRequestError("Something went wrong!");
    }
    return updateProfileInformationEducation;
  }
  public async createProfileInformationJobs(payload) {
    const createProfileInformationJobs =
      await UserRepository.createProfileInformationJobs(payload);
    if (!createProfileInformationJobs) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInformationJobs;
  }
  public async updateProfileInformationJobs(payload) {
    const updateParam: IJOBSUPDATEPARAMS = {};
    if (payload.designation) {
      updateParam.designation = payload.designation;
    } else if (payload.company) {
      updateParam.company = payload.company;
    } else if (payload.startedAt) {
      updateParam.startedAt = payload.startedAt;
    } else if (payload.endedAt) {
      updateParam.endedAt = payload.endedAt;
    }
    const updateProfileInformationJobs =
      await UserRepository.updateProfileInformationJobs(
        updateParam,
        payload.userId
      );
    if (!updateProfileInformationJobs) {
      throw new BadRequestError("Something went wrong!");
    }
    return updateProfileInformationJobs;
  }
  public async createProfileInformationBooks(payload) {
    const createProfileInformationBooks =
      await UserRepository.createProfileInformationBooks(payload);
    if (!createProfileInformationBooks) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInformationBooks;
  }
  public async updateProfileInformationMovies(payload) {
    const updateParam: IMOVIESUPDATEPARAMS = {};
    if (payload.movieName) {
      updateParam.movieName = payload.movieName;
    } else if (payload.tvShowName) {
      updateParam.tvShowName = payload.tvShowName;
    }
    const updateProfileInformationMovies =
      await UserRepository.updateProfileInformationMovies(
        updateParam,
        payload.userId
      );
    if (!updateProfileInformationMovies) {
      throw new BadRequestError("Something went wrong!");
    }
    return updateProfileInformationMovies;
  }
  public async createProfileInformationMusic(payload) {
    const createProfileInformationMusic =
      await UserRepository.createProfileInformationMusic(payload);
    if (!createProfileInformationMusic) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInformationMusic;
  }
  public async updateProfileInformationMusic(payload) {
    const updateParam: IMUSICUPDATEPARAMS = {};
    if (payload.music) {
      updateParam.music = payload.music;
    }
    const updateProfileInformationMusic =
      await UserRepository.updateProfileInformationMusic(
        updateParam,
        payload.userId
      );
    if (!updateProfileInformationMusic) {
      throw new BadRequestError("Something went wrong!");
    }
    return updateProfileInformationMusic;
  }

  public async getUserInfoById(userId) {
    const getUserInfoById = await UserRepository.getUserInfoById(userId);
    if (!getUserInfoById) {
      throw new BadRequestError("Something went wrong!");
    }
    return getUserInfoById;
  }
  public async seeProfileInfo(payload) {
    const checkIfFriends = await userRepository.checkIfFriends(payload);
    if (checkIfFriends.length > 0) {
      const showFriendsPost = await userRepository.showFriendsPost(payload);
      return showFriendsPost;
    } else if (checkIfFriends.length == 0) {
      const findAllFriends = await userRepository.findAllFriends(payload);
      if (findAllFriends.length > 0) {
        console.log("findAllFriends", findAllFriends);
        const isFriend = findAllFriends.find(
          (friend) => friend.friendOfId === payload.profileUserId
        );
        console.log("isFriend", isFriend);
        if (isFriend) {
          const showFriendsOfFriendsPost =
            await userRepository.showFriendsOfFriendsPost(payload);
          return showFriendsOfFriendsPost;
        } else {
          const showPublicPost = await userRepository.showPublicPost(payload);
          return showPublicPost;
        }
      }
    }
  }
  public async setBio(userId, bio) {
    const setBio = await userRepository.setBio(userId, bio);
    if (!setBio) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return setBio;
  }
}
export default new UserService();
