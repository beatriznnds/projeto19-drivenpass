import { Request, Response } from "express";
import { TypeInsertWifiData } from "../types/wifiTypes";
import * as wifiService from "../services/wifiService";

export async function createWifi(req: Request, res: Response) {
  const userId = res.locals.userId;
  const wifi: TypeInsertWifiData = req.body;
  await wifiService.createWifi(wifi, userId);
  res.status(201).send({ message: `Wifi created!` });
}

export async function getAll(req: Request, res: Response) {
  const userId = res.locals.userId;
  const result = await wifiService.getAll(userId);
  res.status(200).send({ result });
}

export async function getWifiById(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  const result = await wifiService.getWifiById(userId, id);
  res.status(200).send({ result });
}

export async function deleteWifi(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  await wifiService.deleteWifi(userId, id);
  res.status(201).send({ message: `Wifi deleted!` });
}
