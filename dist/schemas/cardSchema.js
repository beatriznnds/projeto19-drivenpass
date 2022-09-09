"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCard = void 0;
const joi_1 = __importDefault(require("joi"));
exports.newCard = joi_1.default.object({
    number: joi_1.default.string().required().min(16).max(16).regex(/[0-9]/),
    name: joi_1.default.string().required(),
    cvc: joi_1.default.string().required().min(3).max(3).regex(/[0-9]/),
    expirationDate: joi_1.default.string()
        .required()
        .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
    password: joi_1.default.string().required().min(4).max(8).regex(/[0-9]/),
    isVirtual: joi_1.default.boolean().required(),
    type: joi_1.default.string().required().valid("debit", "credit", "debitAndCredit"),
    title: joi_1.default.string().required(),
});
