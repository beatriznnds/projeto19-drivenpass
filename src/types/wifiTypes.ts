import { wifis } from "@prisma/client";

export type TypeWifiData = Omit<wifis, "id">;
export type TypeInsertWifiData = Omit<wifis, "id" | "userId">;
