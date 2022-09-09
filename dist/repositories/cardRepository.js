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
exports.findById = exports.deleteCard = exports.getCardById = exports.getAllCards = exports.createCard = exports.isTitleValid = void 0;
const database_1 = require("../database");
function isTitleValid(userId, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.findFirst({ where: { userId, title } });
    });
}
exports.isTitleValid = isTitleValid;
function createCard(card) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.create({ data: card });
    });
}
exports.createCard = createCard;
function getAllCards(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.findMany({ where: { userId } });
    });
}
exports.getAllCards = getAllCards;
function getCardById(userId, cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.findFirst({ where: { userId, id: cardId } });
    });
}
exports.getCardById = getCardById;
function deleteCard(cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.delete({ where: { id: cardId } });
    });
}
exports.deleteCard = deleteCard;
function findById(cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.cards.findFirst({ where: { id: cardId } });
    });
}
exports.findById = findById;
