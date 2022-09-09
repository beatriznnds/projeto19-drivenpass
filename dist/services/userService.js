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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.isUserValid = exports.signUp = exports.emailValidation = void 0;
const userRepo = __importStar(require("../repositories/userRepository"));
const bcryptUtils_1 = __importDefault(require("../utils/bcryptUtils"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function emailValidation(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const invalidEmail = yield userRepo.findByEmail(email);
        if (invalidEmail) {
            throw { type: "Conflict", message: `This email is already in use!` };
        }
    });
}
exports.emailValidation = emailValidation;
function signUp(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield emailValidation(user.email);
        const encryptedPassword = yield (0, bcryptUtils_1.default)(user.password);
        const newUser = { email: user.email, password: encryptedPassword };
        yield userRepo.insert(Object.assign({}, newUser));
    });
}
exports.signUp = signUp;
function isUserValid(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const validUser = yield userRepo.findByEmail(user.email);
        if (!validUser) {
            throw { type: "Unauthorized", message: `Incorrect password or email!` };
        }
        const validPasssword = bcrypt_1.default.compareSync(user.password, validUser.password);
        if (!validPasssword) {
            throw { type: "Unauthorized", message: `Incorrect password or email!` };
        }
        return validUser;
    });
}
exports.isUserValid = isUserValid;
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const validUser = yield isUserValid(user);
        const JWT_SECRET = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ email: validUser.email, userId: validUser.id }, JWT_SECRET);
        return token;
    });
}
exports.login = login;
