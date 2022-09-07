import { safeNotes } from "@prisma/client";

export type TypeSafeNotesData = Omit<safeNotes, "id">;
export type TypeInsertSafeNotesData = Omit<safeNotes, "id" | "userId">;
