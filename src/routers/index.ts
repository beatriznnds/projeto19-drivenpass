import { Router } from "express";
import userRouter from "./userRouter";
import credentialRouter from "./credentialRouter";
import safeNoteRouter from "./safeNoteRouter";
import cardRouter from "./cardRouter";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(cardRouter);

export default router;
