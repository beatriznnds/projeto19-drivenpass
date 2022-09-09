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
exports.deleteCredential = exports.getCredentialById = exports.getAllCredentials = exports.createCredential = void 0;
const credentialRepository = __importStar(require("../repositories/credentialRepository"));
const cryptrUtil = __importStar(require("../utils/cryptrUtils"));
function createCredential(credential, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const invalidTitle = yield credentialRepository.isTitleValid(userId, credential.title);
        if (invalidTitle) {
            throw { type: "Conflict", message: `This title is already in use!` };
        }
        const encryptedPassword = cryptrUtil.encrypt(credential.password);
        const newCredential = {
            url: credential.url,
            username: credential.username,
            password: encryptedPassword,
            title: credential.title,
            userId,
        };
        yield credentialRepository.insertCredential(Object.assign({}, newCredential));
    });
}
exports.createCredential = createCredential;
function getAllCredentials(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield credentialRepository.getAll(userId);
        if (!credentials) {
            throw { type: "Not Found", message: `No credentials found!` };
        }
        const allCredentials = credentials.map((c) => {
            return Object.assign(Object.assign({}, c), { password: cryptrUtil.decrypt(c.password) });
        });
        return allCredentials;
    });
}
exports.getAllCredentials = getAllCredentials;
function getCredentialById(userId, credentialId) {
    return __awaiter(this, void 0, void 0, function* () {
        const credential = yield credentialRepository.getCredential(userId, credentialId);
        if (!credential) {
            throw { type: "Not Found", message: `No credentials found!` };
        }
        return Object.assign(Object.assign({}, credential), { password: cryptrUtil.decrypt(credential.password) });
    });
}
exports.getCredentialById = getCredentialById;
function deleteCredential(user, credentialId) {
    return __awaiter(this, void 0, void 0, function* () {
        const credential = yield credentialRepository.findById(credentialId);
        const validUser = yield credentialRepository.getCredential(user.id, credentialId);
        if (!credential) {
            throw { type: "Not Found", message: `No credentials found!` };
        }
        if (credential.userId !== (validUser === null || validUser === void 0 ? void 0 : validUser.userId)) {
            throw {
                type: "Unauthorized",
                message: `You are not allowed to delete this credential!`,
            };
        }
    });
}
exports.deleteCredential = deleteCredential;
