import * as wifiRepo from "../repositories/wifiRepository";
import { encrypt, decrypt } from "../utils/cryptrUtils";
import { TypeInsertWifiData } from "../types/wifiTypes";
import { wifis } from "@prisma/client";

export async function createWifi(wifi: TypeInsertWifiData, userId: number) {
  const newPassword = encrypt(wifi.password);
  const newWifi = { ...wifi, password: newPassword, userId };
  await wifiRepo.createCard(newWifi);
}

export async function getAll(userId: number) {
  const wifis = await wifiRepo.getAll(userId);
  if (!wifis) {
    throw { type: "Not Found", message: `No wifis found!` };
  }
  const allWifis = wifis.map((w) => {
    return { ...w, password: decrypt(w.password) };
  });
  return allWifis;
}

export async function getWifiById(userId: number, wifiId: number) {
  const wifi = await wifiRepo.getWifiById(userId, wifiId);
  if (!wifi) {
    throw { type: "Not Found", message: `No wifis found!` };
  }
  return { ...wifi, password: decrypt(wifi.password) };
}

export async function deleteWifi(userId: number, wifiId: number) {
  const wifi = await wifiRepo.findById(wifiId);
  if (!wifi) {
    throw { type: "Not Found", message: `No wifis found!` };
  }
  if (wifi.userId !== userId) {
    throw {
      type: "Unauthorized",
      message: `You are not allowed to delete this credential!`,
    };
  }
  await wifiRepo.deleteWifi(wifiId);
}
