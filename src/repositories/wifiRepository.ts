import { prisma } from "../database";
import { TypeWifiData } from "../types/wifiTypes";

export async function createCard(wifi: TypeWifiData) {
  return await prisma.wifis.create({ data: wifi });
}
