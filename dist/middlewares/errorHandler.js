"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, req, res, next) {
    if (error.type === "Not Found") {
        return res.status(404).send({ message: error.message });
    }
    if (error.type === "Conflict") {
        return res.status(409).send({ message: error.message });
    }
    if (error.type === "Unauthorized") {
        return res.status(401).send({ message: error.message });
    }
    console.log(error);
    res.sendStatus(500);
}
exports.default = errorHandler;
