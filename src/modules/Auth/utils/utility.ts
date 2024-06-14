import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { decode } from "punycode";
import BadRequestError from "../../../common/errors/http400Error";
dotenv.config();
class Utility {
  public async generateAccessToken(user) {
    console.log("user", user);
    return await jwt.sign(user, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  }
  public async generateRefreshToken(user) {
    return await jwt.sign(user, process.env.JWT_SECRET_KEY);
  }
  public async verifyRefreshToken(user, refreshToken, refreshTokens) {
    if (refreshToken != null && refreshTokens.includes(refreshToken)) {
      jwt.verify(
        refreshToken,
        process.env.JWT_SECRET_KEY,
        async (err, decode) => {
          if (err) {
            throw new BadRequestError("Something went wrong!");
          }
          return await this.generateAccessToken(user);
        }
      );
    }
  }
}

export default new Utility();
