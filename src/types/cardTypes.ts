import { cards } from "@prisma/client";

export type TypeCardData = Omit<cards, "id">;
export type TypeInsertCardData = Omit<cards, "id" | "userId">;
