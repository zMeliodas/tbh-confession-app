import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import {
  getReceivedConfessions,
  getRecipient,
  getSentConfessions,
  sendConfession,
  updateAvatar,
  changePassword
} from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";
import { updateUserName } from "../controller/userController.js";
import { updateUserPrompt } from "../controller/userController.js";
import { validateNewUsername } from "../validators/newUsernameValidator.js";
import { validateNewPrompt } from "../validators/newPromptValidator.js";
import { validateCreateAMessage } from "../validators/messageValidator.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.get("/confession/sent", authorizeUser, getSentConfessions);
router.get("/confession/received", authorizeUser, getReceivedConfessions);
router.get("/confession/:username", authorizeUser, getRecipient);

router.post(
  "/confession",
  authorizeUser,
  validateCreateAMessage,
  sendConfession,
);

router.delete("/deleteUser", authorizeUser, deleteUser);

router.put(
  "/updateUserName",
  authorizeUser,
  validateNewUsername,
  updateUserName,
);

router.put(
  "/updateUserPrompt",
  authorizeUser,
  validateNewPrompt,
  updateUserPrompt,
);

router.put(
  "/updateAvatar",
  authorizeUser,
  upload.single("avatar"),
  updateAvatar,
);

router.put("/changePassword", authorizeUser, changePassword);

export default router;
