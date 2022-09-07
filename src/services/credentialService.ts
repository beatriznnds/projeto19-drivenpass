import * as credentialRepository from "../repositories/credentialRepository";
import * as cryptrUtil from "../utils/cryptrUtils";
import { TypeInsertCredentialData } from "../types/credentialTypes";
import { users } from "@prisma/client";

export async function createCredential(
  credential: TypeInsertCredentialData,
  userId: number
) {
  const invalidTitle = await credentialRepository.isTitleValid(
    userId,
    credential.title
  );
  if (invalidTitle) {
    throw { type: "Conflict", message: `This title is already in use!` };
  }
  const encryptedPassword = cryptrUtil.encrypt(credential.password);
  const newCredential = {
    url: credential.url,
    username: credential.username,
    password: encryptedPassword,
    title: credential.title,
    userId,
  };
  await credentialRepository.insertCredential({ ...newCredential });
}

export async function getAllCredentials(userId: number) {
  const credentials = await credentialRepository.getAll(userId);
  if (!credentials) {
    throw { type: "Not Found", message: `No credentials found!` };
  }
  const allCredentials = credentials.map((c) => {
    return { ...c, password: cryptrUtil.decrypt(c.password) };
  });
  return allCredentials;
}

export async function getCredentialById(userId: number, credentialId: number) {
  const credential = await credentialRepository.getCredential(
    userId,
    credentialId
  );
  if (!credential) {
    throw { type: "Not Found", message: `No credentials found!` };
  }
  return { ...credential, password: cryptrUtil.decrypt(credential.password) };
}

export async function deleteCredential(user: users, credentialId: number) {
  const credential = await credentialRepository.findById(credentialId);
  const validUser = await credentialRepository.getCredential(
    user.id,
    credentialId
  );
  if (!credential) {
    throw { type: "Not Found", message: `No credentials found!` };
  }
  if (credential.userId !== validUser?.userId) {
    throw {
      type: "Unauthorized",
      message: `You are not allowed to delete this credential!`,
    };
  }
}
