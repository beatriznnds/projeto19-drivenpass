import { prisma } from "../database";
import { TypeWifiData } from "../types/wifiTypes";

export async function createCard(wifi: TypeWifiData) {
  return await prisma.wifis.create({ data: wifi });
}

export async function getAll(userId: number) {
  return await prisma.wifis.findMany({ where: { userId } });
}

export async function getWifiById(userId: number, wifiId: number) {
  return await prisma.wifis.findFirst({ where: { userId, id: wifiId } });
}

export async function deleteWifi(wifiId: number) {
  return await prisma.wifis.delete({ where: { id: wifiId } });
}

export async function findById(wifiId: number) {
  return await prisma.wifis.findFirst({ where: { id: wifiId } });
}
