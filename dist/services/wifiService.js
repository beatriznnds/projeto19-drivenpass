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
exports.deleteWifi = exports.getWifiById = exports.getAll = exports.createWifi = void 0;
const wifiRepo = __importStar(require("../repositories/wifiRepository"));
const cryptrUtils_1 = require("../utils/cryptrUtils");
function createWifi(wifi, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPassword = (0, cryptrUtils_1.encrypt)(wifi.password);
        const newWifi = Object.assign(Object.assign({}, wifi), { password: newPassword, userId });
        yield wifiRepo.createCard(newWifi);
    });
}
exports.createWifi = createWifi;
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifis = yield wifiRepo.getAll(userId);
        if (!wifis) {
            throw { type: "Not Found", message: `No wifis found!` };
        }
        const allWifis = wifis.map((w) => {
            return Object.assign(Object.assign({}, w), { password: (0, cryptrUtils_1.decrypt)(w.password) });
        });
        return allWifis;
    });
}
exports.getAll = getAll;
function getWifiById(userId, wifiId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifi = yield wifiRepo.getWifiById(userId, wifiId);
        if (!wifi) {
            throw { type: "Not Found", message: `No wifis found!` };
        }
        return Object.assign(Object.assign({}, wifi), { password: (0, cryptrUtils_1.decrypt)(wifi.password) });
    });
}
exports.getWifiById = getWifiById;
function deleteWifi(wifis, wifiId) {
    return __awaiter(this, void 0, void 0, function* () {
        const wifi = yield wifiRepo.findById(wifiId);
        if (!wifi) {
            throw { type: "Not Found", message: `No wifis found!` };
        }
        const validUser = yield wifiRepo.getWifiById(wifis.id, wifiId);
        if (wifi.userId !== (validUser === null || validUser === void 0 ? void 0 : validUser.userId)) {
            throw {
                type: "Unauthorized",
                message: `You are not allowed to delete this credential!`,
            };
        }
    });
}
exports.deleteWifi = deleteWifi;
