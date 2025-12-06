import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import { message, chatMessage, getChatHistory } from "../controller/messagingController.js"

const router = Router();

router.post("/message", authorizeUser, message);

router.post("/chat", authorizeUser, chatMessage)

router.get("/getChatHistory", authorizeUser, getChatHistory)

export default router;
