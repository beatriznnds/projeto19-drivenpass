import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

const cryptr = new Cryptr("process.env.CRYPTR_SECRETKEY");

export function encrypt(password: string) {
  return cryptr.encrypt(password);
}

export function decrypt(password: string) {
  return cryptr.decrypt(password);
}
