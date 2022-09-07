import { Request, Response } from "express";
import * as userService from "../services/userService";
import { TypeUserData } from "../types/userTypes";

export async function signUp(req: Request, res: Response) {
  const user = req.body;
  await userService.signUp(user);
  res.status(201).send({ message: `User created!` });
}

export async function login(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.login(user);
  res.status(200).send({ token });
}
