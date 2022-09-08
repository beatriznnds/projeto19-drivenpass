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

cardRouter.get("/cards", checkValidToken, cardController.getAllCards);

cardRouter.get("/cards/:id", checkValidToken, cardController.getCardById);

export default cardRouter;
