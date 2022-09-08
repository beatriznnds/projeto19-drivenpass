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

wifiRouter.get("/wifis", checkValidToken, wifiController.getAll);

wifiRouter.get("/wifis/:id", checkValidToken, wifiController.getWifiById);

wifiRouter.delete("/wifis/:id", checkValidToken, wifiController.deleteWifi);

export default wifiRouter;
