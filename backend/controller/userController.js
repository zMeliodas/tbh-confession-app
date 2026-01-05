import {
  deleteUserAccount,
  updateUser,
  updatePrompt,
  message,
} from "../services/userService.js";

async function deleteUser(req, res) {
  try {
    const userId = req.user.id;

    const result = await deleteUserAccount(userId);

    if (!result.success) {
      return res.status(404).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function updateUserName(req, res) {
  try {
    const userId = req.user.id;
    const { newUserName } = req.body;

    const result = await updateUser(userId, newUserName);

    if (!result.success) {
      return res.status(401).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
      user: result.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function updateUserPrompt(req, res) {
  try {
    const userId = req.user.id;
    const { newPrompt } = req.body;

    const result = await updatePrompt(userId, newPrompt);

    if (!result.success) {
      return res.status(400).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function createMessage(req, res) {
  try {
    const { senderId, receiverId, content } = req.body;

    const result = await message(senderId, receiverId, content);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "Error",
      });
    }

    res.status(201).json({
      success: true,
      message: result.message,
      messageData: result.messageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { deleteUser, updateUserName, updateUserPrompt, createMessage };
