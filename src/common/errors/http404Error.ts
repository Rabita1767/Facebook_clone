import HttpStatus from "../httpStatus";
import BaseError from "./baseError";
import { ErrorName } from "../constants";
class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND, ErrorName.NOT_FOUND, message);
  }
}
export default NotFoundError;
