import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import {
  getReceivedConfessions,
  getSentConfessions,
  sendConfession,
} from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";
import { updateUserName } from "../controller/userController.js";
import { updateUserPrompt } from "../controller/userController.js";
import { validateNewUsername } from "../validators/newUsernameValidator.js";
import { validateNewPrompt } from "../validators/newPromptValidator.js";
import { validateCreateAMessage } from "../validators/messageValidator.js";

const router = Router();

router.get("/confession/sent", authorizeUser, getSentConfessions);
router.get("/confession/received", authorizeUser, getReceivedConfessions);

router.post(
  "/confession",
  authorizeUser,
  validateCreateAMessage,
  sendConfession
);

router.delete("/deleteUser", authorizeUser, deleteUser);

router.put(
  "/updateUserName",
  authorizeUser,
  validateNewUsername,
  updateUserName
);

router.put(
  "/updateUserPrompt",
  authorizeUser,
  validateNewPrompt,
  updateUserPrompt
);

export default router;
