import bcrypt from "bcrypt";
import AuthRepository from "../repositories/auth.repository";
import constants from "../config/constant";
import BadRequestError from "../../../common/errors/http400Error";
class AuthService {
  async createAuth(user) {
    const hashedPassword = bcrypt.hash(user.password, constants.saltValue);
    const fullName = user.fName + " " + user.lName;
    console.log("fullName", fullName);
    user.name = fullName;
    user.password = hashedPassword;
    const createUser = await AuthRepository.createUser(user);
    if (!createUser) {
      throw new BadRequestError("Something went wrong!");
    }
    return createUser;
  }
}
export default new AuthService();
