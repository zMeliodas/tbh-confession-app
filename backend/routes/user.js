import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import { getProfile } from "../controller/userController.js"
import { message, chatMessage, getChatHistory } from "../controller/messagingController.js"

const router = Router();

router.get("/profile", authorizeUser, getProfile);

router.post("/message", authorizeUser, message);

router.post("/chat", authorizeUser, chatMessage)

router.get("/getChatHistory", authorizeUser, getChatHistory)

export default router;
