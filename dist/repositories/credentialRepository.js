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
exports.findById = exports.deleteCredential = exports.getCredential = exports.getAll = exports.isTitleValid = exports.insertCredential = void 0;
const database_1 = require("../database");
function insertCredential(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.create({ data: credentials });
    });
}
exports.insertCredential = insertCredential;
function isTitleValid(userId, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.findFirst({ where: { userId, title } });
    });
}
exports.isTitleValid = isTitleValid;
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.findMany({ where: { userId } });
    });
}
exports.getAll = getAll;
function getCredential(userId, credencialId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.findFirst({
            where: { userId, id: credencialId },
        });
    });
}
exports.getCredential = getCredential;
function deleteCredential(credentialId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.delete({ where: { id: credentialId } });
    });
}
exports.deleteCredential = deleteCredential;
function findById(credentialId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.credentials.findFirst({ where: { id: credentialId } });
    });
}
exports.findById = findById;
