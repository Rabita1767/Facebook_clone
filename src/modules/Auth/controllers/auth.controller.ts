import { Request, Response, nextFunction } from "express";
import authService from "../services/auth.service";
import sendResponse from "../utils/response";
import HttpStatus from "../../../common/httpStatus";
import utility from "../utils/utility";

let refreshTokens = [];
class AuthController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const createAuth = await authService.createAuth(req.body);
      return sendResponse(res, HttpStatus.OK, "Signup successful!", {
        result: createAuth,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);
      const accessToken = await utility.generateAccessToken(user);
      const refreshToken = await utility.generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      return sendResponse(res, HttpStatus.OK, "Login successful!", {
        result: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async logout(req: Request, res: Response): Promise<void> {
    try {
      const { refreshToken } = req.body;
      refreshTokens = refreshTokens.filter((token) => token != refreshToken);
      return sendResponse(res, HttpStatus.OK, "Logout successful!", {
        result: refreshToken,
      });
    } catch (error) {
      console.log(error);
      return sendResponse(res, error.statusCode, error);
    }
  }
  public async createAccessToken(req: Request, res: Response): Promise<void> {
    try {
      const { email, refreshToken } = req.body;
      const findUser = await authService.findUserByEmail(email);
      const createAccessToken = await utility.verifyRefreshToken(
        findUser,
        refreshToken,
        refreshTokens
      );
      return sendResponse(
        res,
        HttpStatus.OK,
        "Create Access Token successful!",
        {
          result: createAccessToken,
        }
      );
    } catch (error) {
      console.log(error);
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
}
export default new AuthController();
