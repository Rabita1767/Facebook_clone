import HttpStatus from "../httpStatus";
class BaseError extends Error {
    public readonly name: string;
    public readonly description: string;
    public readonly statusCode: HttpStatus;
    public readonly isOperational: boolean;
    public readonly errors: any;
    constructor(
        message: string,
        httpCode: HttpStatus,
        name: string,
        description: string,
        errors?: any
    ) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = httpCode;
        this.isOperational = true;
        this.description = description;
        this.errors = errors || {};

        Error.captureStackTrace(this);
    }
}

export default BaseError;
