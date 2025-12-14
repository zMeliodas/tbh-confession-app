import { Router } from "express";
import { validateAuthPayload } from "../validators/authValidator.js";
import { register, login, verifyUser } from "../controller/authController.js";
import { authorizeUser } from "../middleware/authorizeUser.js";


const router = Router();

router.post("/register", validateAuthPayload, register);

router.post("/login", validateAuthPayload, login);

router.get("/verify", authorizeUser, verifyUser)

export default router;