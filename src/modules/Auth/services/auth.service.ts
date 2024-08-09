import bcrypt from "bcrypt";
import AuthRepository from "../repositories/auth.repository";
import constants from "../config/constant";
import BadRequestError from "../../../common/errors/http400Error";
import authRepository from "../repositories/auth.repository";
import userRepository from "../../User/repositories/user.repository";
import basicProfileInfoRepository from "../../BasicProfileInfo/repositories/basicProfileInfo.repository";
class AuthService {
  async createAuth(user) {
    const hashedPassword = await bcrypt.hash(
      user.password,
      constants.saltValue
    );
    const fullName = user.fName + " " + user.lName;
    user.name = fullName;
    user.password = hashedPassword;
    const createAuth = await AuthRepository.createAuth(user);
    const createUser = await userRepository.createUser(createAuth.id);
    const createBasicInfo = await basicProfileInfoRepository.createBasicInfo(
      createAuth.dob,
      createAuth.gender,
      createUser.id
    );
    if (!createAuth || !createUser || !createBasicInfo) {
      throw new BadRequestError("Something went wrong!");
    }
    return createAuth;
  }
  async createUser(authId) {
    await AuthRepository.createUser(authId);
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
  async findUserByEmail(email) {
    const findUser = await authRepository.findUserByEmail(email);
    if (!findUser) {
      throw new BadRequestError("User not found!");
    } else {
      return findUser;
    }
  }
}
export default new AuthService();
