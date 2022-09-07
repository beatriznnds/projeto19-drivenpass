import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { checkValidToken } from "../middlewares/tokenValidation";
import { newCredential } from "../schemas/credentialSchema";
import * as credentialController from "../controllers/credentialController";

const credentialRouter = Router();

credentialRouter.post(
  "/newcredential",
  validateSchema(newCredential),
  checkValidToken,
  credentialController.createCredential
);

credentialRouter.get(
  "/credentials",
  checkValidToken,
  credentialController.getAllCredentials
);

credentialRouter.get(
  "/credentials/:id",
  checkValidToken,
  credentialController.getCredentialById
);

credentialRouter.delete(
  "/credentials/:id",
  checkValidToken,
  credentialController.deleteCredential
);

export default credentialRouter;
