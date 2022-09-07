import { Request, Response } from "express";
import * as credentialService from "../services/credentialService";
import { TypeInsertCredentialData } from "../types/credentialTypes";

export async function createCredential(req: Request, res: Response) {
  const userId = res.locals.userId;
  const credential: TypeInsertCredentialData = req.body;
  await credentialService.createCredential(credential, userId);
  res.status(201).send({ message: `Credential created!` });
}

export async function getAllCredentials(req: Request, res: Response) {
  const userId = res.locals.userId;
  const result = await credentialService.getAllCredentials(userId);
  res.status(200).send({ result });
}

export async function getCredentialById(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  const result = await credentialService.getCredentialById(userId, id);
  res.status(200).send({ result });
}

export async function deleteCredential(req: Request, res: Response) {
  const userId = res.locals.userId;
  const id = Number(req.params.id);
  const result = await credentialService.deleteCredential(userId, id);
  res.status(201).send({ message: `Credential deleted!` });
}
