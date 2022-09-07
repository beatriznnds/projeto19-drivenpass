import Joi from "joi";
import { TypeInsertCredentialData } from "../types/credentialTypes";

export const newCredential = Joi.object<TypeInsertCredentialData>({
  url: Joi.string()
    .regex(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    )
    .required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  title: Joi.string().required(),
});
