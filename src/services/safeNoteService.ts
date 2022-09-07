import * as safeNoteRepo from "../repositories/safeNoteRepository";
import {
  TypeSafeNotesData,
  TypeInsertSafeNotesData,
} from "../types/safeNoteTypes";
import { safeNotes } from "@prisma/client";

export async function createSafeNote(
  safeNote: TypeInsertSafeNotesData,
  userId: number
) {
  const invalidTitle = await safeNoteRepo.isTitleValid(userId, safeNote.title);
  if (invalidTitle) {
    throw { type: "Conflict", message: `This title is already in use!` };
  }
  const newSafeNote = { ...safeNote, userId };
  await safeNoteRepo.create({ ...newSafeNote });
}

export async function getAll(userId: number) {
  const safeNotes = await safeNoteRepo.getAll(userId);
  if (!safeNotes) {
    throw { type: "Not Found", message: `No safe note found!` };
  }
  return safeNotes;
}

export async function getSafeNoteById(userId: number, safeNoteId: number) {
  const safeNotes = await safeNoteRepo.getSafeNote(userId, safeNoteId);
  if (!safeNotes) {
    throw { type: "Not Found", message: `No safe note found!` };
  }
  return safeNotes;
}

export async function deleteSafeNote(safeNote: safeNotes, safeNoteId: number) {
  const safeNotes = await safeNoteRepo.findById(safeNoteId);
  if (!safeNotes) {
    throw { type: "Not Found", message: `No safe note found!` };
  }
  const validSafeNote = await safeNoteRepo.getSafeNote(safeNote.id, safeNoteId);
  if (safeNotes?.userId !== validSafeNote?.userId) {
    throw {
      type: "Unauthorized",
      message: `You are not allowed to delete this safe note!`,
    };
  }
}
