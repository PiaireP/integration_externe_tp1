"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = exports.NotFoundException = void 0;
class Exception {
    constructor(error, status) {
        this.error = error;
        this.status = status;
    }
}
// 404
class NotFoundException extends Exception {
    constructor(error) {
        super(error, 404);
    }
}
exports.NotFoundException = NotFoundException;
// 400
class BadRequestException extends Exception {
    constructor(error) {
        super(error, 400);
    }
}
exports.BadRequestException = BadRequestException;
