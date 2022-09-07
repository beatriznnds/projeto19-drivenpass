import { prisma } from "../database";
import { getSafeNoteById } from "../services/safeNoteService";
import { TypeSafeNotesData } from "../types/safeNoteTypes";

export async function isTitleValid(userId: number, title: string) {
  return await prisma.safeNotes.findFirst({ where: { userId, title } });
}

export async function create(safeNote: TypeSafeNotesData) {
  return await prisma.safeNotes.create({ data: safeNote });
}

export async function getAll(userId: number) {
  return await prisma.safeNotes.findMany({ where: { userId } });
}

export async function getSafeNote(userId: number, safeNoteId: number) {
  return await prisma.safeNotes.findFirst({
    where: { userId, id: safeNoteId },
  });
}

export async function deleteSafeNote(safeNoteId: number) {
  return await prisma.safeNotes.delete({ where: { id: safeNoteId } });
}

export async function findById(safeNoteId: number) {
  return await prisma.safeNotes.findFirst({ where: { id: safeNoteId } });
}
