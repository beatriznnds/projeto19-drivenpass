import { prisma } from "../database";
import { TypeCardData } from "../types/cardTypes";

export async function isTitleValid(userId: number, title: string) {
  return await prisma.cards.findFirst({ where: { userId, title } });
}

export async function createCard(card: TypeCardData) {
  return await prisma.cards.create({ data: card });
}
