"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.findByEmail = exports.insert = void 0;
const database_1 = require("../database");
function insert(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.users.create({ data: user });
    });
}
exports.insert = insert;
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.users.findFirst({ where: { email } });
    });
}
exports.findByEmail = findByEmail;
function findById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.users.findFirst({ where: { id: userId } });
    });
}
exports.findById = findById;
