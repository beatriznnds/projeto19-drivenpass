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
exports.findById = exports.deleteSafeNote = exports.getSafeNote = exports.getAll = exports.create = exports.isTitleValid = void 0;
const database_1 = require("../database");
function isTitleValid(userId, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.findFirst({ where: { userId, title } });
    });
}
exports.isTitleValid = isTitleValid;
function create(safeNote) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.create({ data: safeNote });
    });
}
exports.create = create;
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.findMany({ where: { userId } });
    });
}
exports.getAll = getAll;
function getSafeNote(userId, safeNoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.findFirst({
            where: { userId, id: safeNoteId },
        });
    });
}
exports.getSafeNote = getSafeNote;
function deleteSafeNote(safeNoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.delete({ where: { id: safeNoteId } });
    });
}
exports.deleteSafeNote = deleteSafeNote;
function findById(safeNoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.safeNotes.findFirst({ where: { id: safeNoteId } });
    });
}
exports.findById = findById;
