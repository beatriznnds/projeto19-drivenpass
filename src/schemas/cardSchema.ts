import Joi from "joi";
import { TypeInsertCardData } from "../types/cardTypes";

export const newCard = Joi.object<TypeInsertCardData>({
  number: Joi.string().required().min(16).max(16).regex(/[0-9]/),
  name: Joi.string().required(),
  cvc: Joi.string().required().min(3).max(3).regex(/[0-9]/),
  expirationDate: Joi.string()
    .required()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  password: Joi.string().required().min(4).max(8).regex(/[0-9]/),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().required().valid("debit", "credit", "debitAndCredit"),
  title: Joi.string().required(),
});
