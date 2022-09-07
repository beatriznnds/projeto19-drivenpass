import Joi from "joi";
import { TypeInsertSafeNotesData } from "../types/safeNoteTypes";

export const newSafeNote = Joi.object<TypeInsertSafeNotesData>({
  title: Joi.string().max(50).required(),
  note: Joi.string().max(1000).required(),
});
