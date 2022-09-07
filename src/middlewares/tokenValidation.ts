import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import * as userRepo from "../repositories/userRepository";

interface Id {
  id: number;
}

export async function checkValidToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    throw { type: "Not Found", message: `Authorization header not found!` };
  }
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    throw { type: "Not Found", message: `Authorization header not found!` };
  }
  const JWT_SECRET = process.env.JWT_SECRET;
  const user = jwt.verify(token, JWT_SECRET as string);
  const findUser = await userRepo.findById((user as Id).id);
  if (!findUser) {
    throw { type: "Unauthorized", message: `Invalid token for user!` };
  }
  res.locals.userId = findUser.id;
  next();
}
