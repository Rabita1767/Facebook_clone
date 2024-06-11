import HttpStatus from "../httpStatus";
import BaseError from "./baseError";
import { ErrorName } from "../constants";
class BadRequestError extends BaseError {
constructor(message:string)
{
    super(message,HttpStatus.BAD_REQUEST,ErrorName.BAD_REQUEST,message);
}
}
export default BadRequestError;