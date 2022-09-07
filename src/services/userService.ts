import * as userRepo from "../repositories/userRepository";
import { TypeUserData } from "../types/userTypes";
import encrypt from "../utils/bcryptUtils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users } from "@prisma/client";

dotenv.config();

export async function emailValidation(email: string) {
  const invalidEmail = await userRepo.findByEmail(email);
  if (invalidEmail) {
    throw { type: "Conflict", message: `This email is already in use!` };
  }
}

export async function signUp(user: TypeUserData) {
  await emailValidation(user.email);
  const encryptedPassword = await encrypt(user.password);
  const newUser = { email: user.email, password: encryptedPassword };
  await userRepo.insert({ ...newUser });
}

export async function isUserValid(user: TypeUserData) {
  const validUser = await userRepo.findByEmail(user.email);
  if (!validUser) {
    throw { type: "Unauthorized", message: `Incorrect password or email!` };
  }
  const validPasssword = bcrypt.compareSync(user.password, validUser.password);
  if (!validPasssword) {
    throw { type: "Unauthorized", message: `Incorrect password or email!` };
  }
  return validUser;
}

export async function login(user: TypeUserData) {
  const validUser = await isUserValid(user);
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = jwt.sign(
    { email: validUser.email, userId: validUser.id },
    JWT_SECRET as string
  );
  return token;
}
