import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import * as userRepo from "../repositories/userRepository";

interface Id {
  userId: number;
}

export async function checkValidToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "").trim();
  if (!token) {
    throw { type: "Not Found", message: `Authorization header not found!` };
  }
  const { userId } = jwt.verify(token, process.env.JWT_SECRET as string) as Id;
  res.locals.userId = userId;
  next();
}
