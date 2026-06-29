
import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post("/", userController.signup);

export const userRoute = router;