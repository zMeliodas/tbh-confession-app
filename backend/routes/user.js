import { Router } from "express";
import { authorizeUser } from "../middleware/authorizeUser.js";
import { message } from "../controller/messagingController.js";
import { deleteUser } from "../controller/userController.js";
import { updateUserName } from "../controller/userController.js";
import { updateUserPrompt } from "../controller/userController.js";
import { validateNewUsername } from "../middleware/validateNewUsername.js";
import { validateNewPrompt } from "../middleware/validateNewPrompt.js";

const router = Router();

router.post("/message", authorizeUser, message);

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
