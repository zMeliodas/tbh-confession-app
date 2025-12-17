import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import { message } from "../controller/messagingController.js"
import { deleteUser } from "../controller/userController.js";

const router = Router();

router.post("/message", authorizeUser, message);

router.delete("/deleteUser", authorizeUser, deleteUser)

export default router;
