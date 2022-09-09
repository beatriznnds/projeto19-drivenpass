"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteSafeNote = exports.getSafeNoteById = exports.getAll = exports.createSafeNote = void 0;
const safeNoteRepo = __importStar(require("../repositories/safeNoteRepository"));
function createSafeNote(safeNote, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const invalidTitle = yield safeNoteRepo.isTitleValid(userId, safeNote.title);
        if (invalidTitle) {
            throw { type: "Conflict", message: `This title is already in use!` };
        }
        const newSafeNote = Object.assign(Object.assign({}, safeNote), { userId });
        yield safeNoteRepo.create(Object.assign({}, newSafeNote));
    });
}
exports.createSafeNote = createSafeNote;
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const safeNotes = yield safeNoteRepo.getAll(userId);
        if (!safeNotes) {
            throw { type: "Not Found", message: `No safe note found!` };
        }
        return safeNotes;
    });
}
exports.getAll = getAll;
function getSafeNoteById(userId, safeNoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        const safeNotes = yield safeNoteRepo.getSafeNote(userId, safeNoteId);
        if (!safeNotes) {
            throw { type: "Not Found", message: `No safe note found!` };
        }
        return safeNotes;
    });
}
exports.getSafeNoteById = getSafeNoteById;
function deleteSafeNote(safeNote, safeNoteId) {
    return __awaiter(this, void 0, void 0, function* () {
        const safeNotes = yield safeNoteRepo.findById(safeNoteId);
        if (!safeNotes) {
            throw { type: "Not Found", message: `No safe note found!` };
        }
        const validSafeNote = yield safeNoteRepo.getSafeNote(safeNote.id, safeNoteId);
        if ((safeNotes === null || safeNotes === void 0 ? void 0 : safeNotes.userId) !== (validSafeNote === null || validSafeNote === void 0 ? void 0 : validSafeNote.userId)) {
            throw {
                type: "Unauthorized",
                message: `You are not allowed to delete this safe note!`,
            };
        }
    });
}
exports.deleteSafeNote = deleteSafeNote;
