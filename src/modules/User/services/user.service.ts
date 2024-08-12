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

  public async setBio(userId, bio) {
    const setBio = await userRepository.setBio(userId, bio);
    if (!setBio) {
      throw new BadRequestError(message.SOMETHING_WENT_WRONG);
    }
    return setBio;
  }
}
export default new UserService();
