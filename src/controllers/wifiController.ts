import { Request, Response } from "express";
import { TypeInsertWifiData } from "../types/wifiTypes";
import * as wifiService from "../services/wifiService";

export async function createWifi(req: Request, res: Response) {
  const userId = res.locals.userId;
  const wifi: TypeInsertWifiData = req.body;
  await wifiService.createWifi(wifi, userId);
  res.status(201).send({ message: `Wifi created!` });
}
