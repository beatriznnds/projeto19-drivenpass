import * as cardRepo from "../repositories/cardRepository";
import { TypeInsertCardData } from "../types/cardTypes";
import { encrypt } from "../utils/cryptrUtils";

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
