import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { checkValidToken } from "../middlewares/tokenValidation";
import { newSafeNote } from "../schemas/safeNoteSchema";
import * as safeNoteController from "../controllers/safeNoteController";

const safeNoteRouter = Router();

safeNoteRouter.post(
  "/newnote",
  validateSchema(newSafeNote),
  checkValidToken,
  safeNoteController.createSafeNote
);

safeNoteRouter.get(
  "/safenotes",
  checkValidToken,
  safeNoteController.getAllSafeNotes
);

safeNoteRouter.get(
  "/safenotes/:id",
  checkValidToken,
  safeNoteController.getSafeNoteById
);

safeNoteRouter.delete(
  "/safenotes/:id",
  checkValidToken,
  safeNoteController.deleteSafeNote
);

export default safeNoteRouter;
