import { Router } from "express";
import { validateAuthPayload } from "../validators/authValidator.js";
import { register, login } from "../controller/authController.js";

const router = Router();

router.post("/register", validateAuthPayload, register);

router.post("/login", validateAuthPayload, login);

export default router;