import Joi from "joi";
import { TypeInsertWifiData } from "../types/wifiTypes";

export const newWifi = Joi.object<TypeInsertWifiData>({
  name: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required(),
});
