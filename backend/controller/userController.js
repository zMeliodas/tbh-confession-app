import {
  deleteUserAccount,
  updateUser,
  updatePrompt,
  confession,
  getSentConfessionsById,
  getReceivedConfessionsById,
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

async function sendConfession(req, res) {
  try {
    const userId = req.user.id;
    const { receiver, content } = req.body;

    const result = await confession(userId, receiver, content);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "Error",
      });
    }

    res.status(201).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function getSentConfessions(req, res) {
  try {
    const userId = req.user.id;

    const result = await getSentConfessionsById(userId);

    res.status(200).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function getReceivedConfessions(req, res) {
  try {
    const userId = req.user.id;

    const result = await getReceivedConfessionsById(userId);

    res.status(200).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { deleteUser, updateUserName, updateUserPrompt, sendConfession, getReceivedConfessions, getSentConfessions };
