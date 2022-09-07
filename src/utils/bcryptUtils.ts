import bcrypt from "bcrypt";

export default async function encrypt(password: string) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  return encryptedPassword;
}
