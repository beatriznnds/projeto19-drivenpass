import { Request, Response } from "express";
import { TypeInsertCardData } from "../types/cardTypes";
import * as cardService from "../services/cardService";

export async function createCard(req: Request, res: Response) {
  const userId = res.locals.userId;
  const card: TypeInsertCardData = req.body;
  await cardService.createCard(card, userId);
  res.status(201).send({ message: `Card created!` });
}

export async function getAllCards(req: Request, res: Response) {
  const userId = res.locals.userId;
  const result = await cardService.getAllCards(userId);
  res.status(200).send({ result });
}

export async function getCardById(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  const result = await cardService.getCardById(userId, id);
  res.status(200).send({ result });
}
