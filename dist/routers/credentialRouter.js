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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidation_1 = require("../middlewares/schemaValidation");
const tokenValidation_1 = require("../middlewares/tokenValidation");
const credentialSchema_1 = require("../schemas/credentialSchema");
const credentialController = __importStar(require("../controllers/credentialController"));
const credentialRouter = (0, express_1.Router)();
credentialRouter.post("/newcredential", (0, schemaValidation_1.validateSchema)(credentialSchema_1.newCredential), tokenValidation_1.checkValidToken, credentialController.createCredential);
credentialRouter.get("/credentials", tokenValidation_1.checkValidToken, credentialController.getAllCredentials);
credentialRouter.get("/credentials/:id", tokenValidation_1.checkValidToken, credentialController.getCredentialById);
credentialRouter.delete("/credentials/:id", tokenValidation_1.checkValidToken, credentialController.deleteCredential);
exports.default = credentialRouter;
