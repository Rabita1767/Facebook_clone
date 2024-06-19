import bcrypt from "bcrypt";
import AuthRepository from "../repositories/auth.repository";
import constants from "../config/constant";
import BadRequestError from "../../../common/errors/http400Error";
import authRepository from "../repositories/auth.repository";
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
}
export default new AuthService();
