import { body, validationResult } from "express-validator";
import RequestValidationError from "../../../common/errors/http422Error";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../config/prisma";
import sendResponse from "../utils/response";
import HttpStatus from "../../../common/httpStatus";
const authValidator = {
  signUp: [
    body("fName")
      .exists()
      .withMessage("First Name is Required")
      .bail()
      .isString()
      .withMessage("First Name must be a string")
      .bail()
      .customSanitizer((value) => value.trim())
      .custom((value) => {
        if (/^[A-Za-z ]+$/.test(value)) {
          return true;
        } else {
          throw new Error("Name must contain only alphabets and spaces");
        }
      })
      .bail()
      .custom((value) => {
        if (value.length >= 1 && value.length <= 50) {
          return true;
        } else {
          throw new Error("Name must be between 1 and 50 characters");
        }
      }),
    body("lName")
      .exists()
      .withMessage("Last Name is Required")
      .bail()
      .isString()
      .withMessage("Last name must be a string")
      .bail()
      .customSanitizer((value) => value.trim())
      .custom((value) => {
        if (/^[A-Za-z ]+$/.test(value)) {
          return true;
        } else {
          throw new Error("Name must contain only alphabets and spaces");
        }
      })
      .bail()
      .custom((value) => {
        if (value.length >= 1 && value.length <= 50) {
          return true;
        } else {
          throw new Error("Name must be between 1 and 50 characters");
        }
      }),
    body("email")
      .exists()
      .withMessage("Email is Required")
      .bail()
      .isEmail()
      .withMessage("Invalid Email Address")
      .bail()
      .custom(async (value, { req }) => {
        const emailExist = await prisma.auth.findUnique({
          where: {
            email: value,
          },
        });
        if (emailExist) {
          throw new Error("Email already exist.Please log in to your account!");
        }
        return true;
      }),
    body("password")
      .exists()
      .withMessage("Password must exist!")
      .bail()
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
      .withMessage(
        "Password must contain at least 8 characters with 1 lower case, 1 upper case, 1 number, 1 symbol"
      ),
    // body("confirmPassword")
    //   .exists()
    //   .withMessage("Password is required")
    //   .bail()
    //   .custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //       throw new Error("Passwords don't match!");
    //     }
    //     return true;
    //   }),
    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("check", errors);
        return sendResponse(
          res,
          HttpStatus.UNPROCESSABLE_ENTITY,
          "Validation error occured",
          errors.errors
        );
      }
      next();
    },
  ],
};
export default authValidator;
