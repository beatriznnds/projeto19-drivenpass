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
exports.deleteCard = exports.getCardById = exports.getAllCards = exports.createCard = void 0;
const cardRepo = __importStar(require("../repositories/cardRepository"));
const cryptrUtils_1 = require("../utils/cryptrUtils");
function createCard(card, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const invalidTitle = yield cardRepo.isTitleValid(userId, card.title);
        if (invalidTitle) {
            throw { type: "Conflict", message: `This title is already in use!` };
        }
        const newPassword = (0, cryptrUtils_1.encrypt)(card.password);
        const newCVC = (0, cryptrUtils_1.encrypt)(card.cvc);
        const newCard = Object.assign(Object.assign({}, card), { password: newPassword, cvc: newCVC, userId });
        yield cardRepo.createCard(newCard);
    });
}
exports.createCard = createCard;
function getAllCards(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const cards = yield cardRepo.getAllCards(userId);
        if (!cards) {
            throw { type: "Not Found", message: `No cards found!` };
        }
        const allCards = cards.map((c) => {
            return Object.assign(Object.assign({}, c), { password: (0, cryptrUtils_1.decrypt)(c.password) });
        });
        return allCards;
    });
}
exports.getAllCards = getAllCards;
function getCardById(userId, cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        const card = yield cardRepo.getCardById(userId, cardId);
        if (!card) {
            throw { type: "Not Found", message: `No cards found!` };
        }
        return Object.assign(Object.assign({}, card), { password: (0, cryptrUtils_1.decrypt)(card.password) });
    });
}
exports.getCardById = getCardById;
function deleteCard(user, cardId) {
    return __awaiter(this, void 0, void 0, function* () {
        const card = yield cardRepo.findById(cardId);
        const isCardFromUser = yield cardRepo.getCardById(user.id, cardId);
        if (!card) {
            throw { type: "Not Found", message: `No cards found!` };
        }
        if (card.userId !== (isCardFromUser === null || isCardFromUser === void 0 ? void 0 : isCardFromUser.userId)) {
            throw {
                type: "Unauthorized",
                message: `You are not allowed to delete this card!`,
            };
        }
    });
}
exports.deleteCard = deleteCard;
