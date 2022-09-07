import { Router } from "express";
import userRouter from "./userRouter";
import credentialRouter from "./credentialRouter";
import safeNoteRouter from "./safeNoteRouter";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);

export default router;
