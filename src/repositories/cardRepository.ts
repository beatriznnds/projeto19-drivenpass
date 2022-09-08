import { prisma } from "../database";
import { TypeCardData } from "../types/cardTypes";

export async function isTitleValid(userId: number, title: string) {
  return await prisma.cards.findFirst({ where: { userId, title } });
}

export async function createCard(card: TypeCardData) {
  return await prisma.cards.create({ data: card });
}

export async function getAllCards(userId: number) {
  return await prisma.cards.findMany({ where: { userId } });
}

export async function getCardById(userId: number, cardId: number) {
  return await prisma.cards.findFirst({ where: { userId, id: cardId } });
}

export async function deleteCard(cardId: number) {
  return await prisma.cards.delete({ where: { id: cardId } });
}

export async function findById(cardId: number) {
  return await prisma.cards.findFirst({ where: { id: cardId } });
}
