import { prisma } from "../database";
import { TypeUserData } from "../types/userTypes";

export async function insert(user: TypeUserData) {
  return await prisma.users.create({ data: user });
}

export async function findByEmail(email: string) {
  return await prisma.users.findFirst({ where: { email } });
}
export async function findById(userId: number) {
  return await prisma.users.findFirst({ where: { id: userId } });
}
