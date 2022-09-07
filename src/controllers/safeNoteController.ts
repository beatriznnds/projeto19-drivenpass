import { Request, Response } from "express";
import * as safeNoteService from "../services/safeNoteService";
import { TypeInsertSafeNotesData } from "../types/safeNoteTypes";

export async function createSafeNote(req: Request, res: Response) {
  const userId = res.locals.userId;
  const safeNote: TypeInsertSafeNotesData = req.body;
  await safeNoteService.createSafeNote(safeNote, userId);
  res.status(201).send({ message: `Safe note created!` });
}

export async function getAllSafeNotes(req: Request, res: Response) {
  const userId = res.locals.userId;
  const result = await safeNoteService.getAll(userId);
  res.status(200).send({ result });
}

export async function getSafeNoteById(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  const result = await safeNoteService.getSafeNoteById(userId, id);
  res.status(200).send({ result });
}

export async function deleteSafeNote(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  await safeNoteService.deleteSafeNote(userId, id);
  res.status(201).send({ message: `Safe note deleted!` });
}
