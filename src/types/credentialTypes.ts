import { credentials } from "@prisma/client";

export type TypeCredentialData = Omit<credentials, "id">;
export type TypeInsertCredentialData = Omit<credentials, "id" | "userId">;
