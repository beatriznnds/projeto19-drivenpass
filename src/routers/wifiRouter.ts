import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { checkValidToken } from "../middlewares/tokenValidation";
import { newWifi } from "../schemas/wifiSchema";
import * as wifiController from "../controllers/wifiController";

const wifiRouter = Router();

wifiRouter.post(
  "/newwifi",
  validateSchema(newWifi),
  checkValidToken,
  wifiController.createWifi
);

export default wifiRouter;
