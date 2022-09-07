import { Request, Response } from "express";
import { TypeInsertCardData } from "../types/cardTypes";
import * as cardService from "../services/cardService";

export async function createCard(req: Request, res: Response) {
  const userId = res.locals.userId;
  const card: TypeInsertCardData = req.body;
  await cardService.createCard(card, userId);
  res.status(201).send({ message: `Card created!` });
}
