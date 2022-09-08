import { prisma } from "../database";
import { TypeCredentialData } from "../types/credentialTypes";

export async function insertCredential(credentials: TypeCredentialData) {
  return await prisma.credentials.create({ data: credentials });
}

export async function isTitleValid(userId: number, title: string) {
  return await prisma.credentials.findFirst({ where: { userId, title } });
}

export async function getAll(userId: number) {
  return await prisma.credentials.findMany({ where: { userId } });
}

export async function getCredential(userId: number, credencialId: number) {
  return await prisma.credentials.findFirst({
    where: { userId, id: credencialId },
  });
}

export async function deleteCredential(credentialId: number) {
  return await prisma.credentials.delete({ where: { id: credentialId } });
}

export async function findById(credentialId: number) {
  return await prisma.credentials.findFirst({ where: { id: credentialId } });
}
