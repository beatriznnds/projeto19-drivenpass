import * as wifiRepo from "../repositories/wifiRepository";
import { encrypt } from "../utils/cryptrUtils";
import { TypeInsertWifiData } from "../types/wifiTypes";

export async function createWifi(wifi: TypeInsertWifiData, userId: number) {
  const newPassword = encrypt(wifi.password);
  const newWifi = { ...wifi, password: newPassword, userId };
  await wifiRepo.createCard(newWifi);
}
