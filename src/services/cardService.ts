import * as cardRepo from "../repositories/cardRepository";
import { TypeInsertCardData } from "../types/cardTypes";
import { encrypt, decrypt } from "../utils/cryptrUtils";
import { users } from "@prisma/client";

export async function createCard(card: TypeInsertCardData, userId: number) {
  const invalidTitle = await cardRepo.isTitleValid(userId, card.title);
  if (invalidTitle) {
    throw { type: "Conflict", message: `This title is already in use!` };
  }
  const newPassword = encrypt(card.password);
  const newCVC = encrypt(card.cvc);
  const newCard = { ...card, password: newPassword, cvc: newCVC, userId };
  await cardRepo.createCard(newCard);
}

export async function getAllCards(userId: number) {
  const cards = await cardRepo.getAllCards(userId);
  if (!cards) {
    throw { type: "Not Found", message: `No cards found!` };
  }
  const allCards = cards.map((c) => {
    return { ...c, password: decrypt(c.password) };
  });
  return allCards;
}

export async function getCardById(userId: number, cardId: number) {
  const card = await cardRepo.getCardById(userId, cardId);
  if (!card) {
    throw { type: "Not Found", message: `No cards found!` };
  }
  return { ...card, password: decrypt(card.password) };
}

export async function deleteCard(userId: number, cardId: number) {
  const card = await cardRepo.findById(cardId);
  if (!card) {
    throw { type: "Not Found", message: `No cards found!` };
  }
  if (card.userId !== userId) {
    throw {
      type: "Unauthorized",
      message: `You are not allowed to delete this card!`,
    };
  }
  await cardRepo.deleteCard(cardId);
}
