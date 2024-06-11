import { Request, Response } from "express";
import { prisma } from "../../../config/prisma";
import authService from "../services/auth.service";
import sendResponse from "../utils/response";
import HttpStatus from "../../../common/httpStatus";
import { Result } from "express-validator";
class AuthController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const createUser = await authService.createAuth(req.body);
      return sendResponse(res, HttpStatus.OK, "Signup successful!", {
        result: createUser,
      });
    } catch (error) {
      return sendResponse(
        res,
        HttpStatus.INTERNAL_SERVER_ERROR,
        "Internal Server Error!"
      );
    }
  }
}
export default new AuthController();
