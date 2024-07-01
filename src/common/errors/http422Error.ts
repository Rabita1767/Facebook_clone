// import BaseError from "./baseError";
// import HttpStatus from "../httpStatus";
// import { ErrorName } from "../constants";
// class RequestValidationError extends BaseError{
// constructor(message:string,errors:any)

// {
//     super(
//         message,
//         HttpStatus.UNPROCESSABLE_ENTITY,
//         ErrorName.BAD_REQUEST,
//         message,
//         errors
//     );
// }
// }
// export default RequestValidationError;
// requestValidationError.ts
import BaseError from "./baseError";
import HttpStatus from "../httpStatus";
import { ErrorName } from "../constants";

class RequestValidationError extends BaseError {
  constructor(message: string, errors: any) {
    super(
      message,
      HttpStatus.UNPROCESSABLE_ENTITY,
      ErrorName.BAD_REQUEST,
      message,
      errors
    );
  }
}

export default RequestValidationError;
