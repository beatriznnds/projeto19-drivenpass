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
const safeNoteSchema_1 = require("../schemas/safeNoteSchema");
const safeNoteController = __importStar(require("../controllers/safeNoteController"));
const safeNoteRouter = (0, express_1.Router)();
safeNoteRouter.post("/newnote", (0, schemaValidation_1.validateSchema)(safeNoteSchema_1.newSafeNote), tokenValidation_1.checkValidToken, safeNoteController.createSafeNote);
safeNoteRouter.get("/safenotes", tokenValidation_1.checkValidToken, safeNoteController.getAllSafeNotes);
safeNoteRouter.get("/safenotes/:id", tokenValidation_1.checkValidToken, safeNoteController.getSafeNoteById);
safeNoteRouter.delete("/safenotes/:id", tokenValidation_1.checkValidToken, safeNoteController.deleteSafeNote);
exports.default = safeNoteRouter;
