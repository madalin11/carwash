import { CustomError } from "./custom-error";

export class InvalidParamError extends CustomError {
    statusCode = 400;

    constructor(private reason: string ) {
        super('Invalid param');

        Object.setPrototypeOf(this, InvalidParamError.prototype);
    }

    serializeErrors() {
        return [
            { message: this.reason }
        ]
    }
}