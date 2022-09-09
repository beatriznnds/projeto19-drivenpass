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
exports.findById = exports.deleteWifi = exports.getWifiById = exports.getAll = exports.createCard = void 0;
const database_1 = require("../database");
function createCard(wifi) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.wifis.create({ data: wifi });
    });
}
exports.createCard = createCard;
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.wifis.findMany({ where: { userId } });
    });
}
exports.getAll = getAll;
function getWifiById(userId, wifiId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.wifis.findFirst({ where: { userId, id: wifiId } });
    });
}
exports.getWifiById = getWifiById;
function deleteWifi(wifiId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.wifis.delete({ where: { id: wifiId } });
    });
}
exports.deleteWifi = deleteWifi;
function findById(wifiId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.wifis.findFirst({ where: { id: wifiId } });
    });
}
exports.findById = findById;
