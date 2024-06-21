import bcrypt from "bcrypt";
import AuthRepository from "../repositories/auth.repository";
import constants from "../config/constant";
import BadRequestError from "../../../common/errors/http400Error";
import authRepository from "../repositories/auth.repository";
import IUPDATEPARAMS from "../types/auth.interface";
import IEDUCATIONUPDATEPARAMS from "../types/auth.interface";
import IJOBSUPDATEPARAMS from "../types/auth.interface";
class AuthService {
  async createAuth(user) {
    const hashedPassword = await bcrypt.hash(
      user.password,
      constants.saltValue
    );
    const fullName = user.fName + " " + user.lName;
    console.log("fullName", fullName);
    user.name = fullName;
    user.password = hashedPassword;
    const createAuth = await AuthRepository.createAuth(user);
    if (!createAuth) {
      throw new BadRequestError("Something went wrong!");
    }
    return createAuth;
  }
  async createUser(authId) {
    const createUser = await AuthRepository.createUser(authId);
  }
  async login(email, password) {
    const user = await AuthRepository.findUserByEmail(email);
    if (!user) {
      throw new BadRequestError("User not found!");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new BadRequestError("Invalid password!");
    }
    return user;
  }
  async findUserById(userId) {
    console.log("user", userId);
    const findUser = await authRepository.findUserById(userId);
    if (!findUser) {
      throw new BadRequestError("User not found!");
    }
    return findUser;
  }
  async findUserByEmail(email) {
    const findUser = await authRepository.findUserByEmail(email);
    if (!findUser) {
      throw new BadRequestError("User not found!");
    } else {
      return findUser;
    }
  }
  async saveProfilePicture(user, file) {
    const saveProfilePicture = await authRepository.saveProfilePicture(
      user,
      file
    );
    if (!saveProfilePicture) {
      throw new BadRequestError("Something went wrong!");
    }
    return saveProfilePicture;
  }
  async saveCoverPhoto(user, file) {
    const saveCoverPhoto = await authRepository.saveCoverPhoto(user, file);
    if (!saveCoverPhoto) {
      throw new BadRequestError("Something went wrong!");
    }
    return saveCoverPhoto;
  }
  async createProfileInfo(payload) {
    const createProfileInfo = await authRepository.createProfileInfo(payload);
    if (!createProfileInfo) {
      throw new BadRequestError("Something went wrong!");
    }
    return createProfileInfo;
  }
  async createProfileInformationEducation(payload) {
    const createProfileInformationEducation =
      await authRepository.createProfileInformationEducation(payload);
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
    const updateProfileInfo = await authRepository.updateProfileInfo(
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
      await authRepository.updateProfileInformationEducation(
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
      await authRepository.createProfileInformationJobs(payload);
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
  }
}
export default new AuthService();
