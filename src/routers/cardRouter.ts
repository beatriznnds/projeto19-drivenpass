import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { checkValidToken } from "../middlewares/tokenValidation";
import { newCard } from "../schemas/cardSchema";
import * as cardController from "../controllers/cardController";

const cardRouter = Router();

cardRouter.post(
  "/newcard",
  validateSchema(newCard),
  checkValidToken,
  cardController.createCard
);

export default cardRouter;
