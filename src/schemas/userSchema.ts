import Joi from "joi";
import { TypeUserData } from "../types/userTypes";

export const newUser = Joi.object<TypeUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});
