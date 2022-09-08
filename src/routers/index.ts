import { Router } from "express";
import userRouter from "./userRouter";
import credentialRouter from "./credentialRouter";
import safeNoteRouter from "./safeNoteRouter";
import cardRouter from "./cardRouter";
import wifiRouter from "./wifiRouter";

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;
