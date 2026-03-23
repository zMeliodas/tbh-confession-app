import {
  deleteUserAccount,
  updateUser,
  updatePrompt,
  confession,
  getSentConfessionsById,
  getReceivedConfessionsById,
  getUserByUsername,
  updateUserAvatar,
} from "../services/userService.js";
import { io, onlineUsers } from "../server.js";
import { cloudinary } from "../config/cloudinary.js";

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

    const receiverSocketId = onlineUsers.get(String(result.data.receiver_id));
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", {
        message_id: result.data.message_id,
        senderId: userId,
        receiverUsername: receiver,
        content: result.data.content,
        created_at: result.data.created_at,
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

async function getRecipient(req, res) {
  try {
    const { username } = req.params;
    const currentUserId = req.user.id;

    const result = await getUserByUsername(username, currentUserId);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message,
      });
    }

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

async function updateAvatar(req, res) {
  try {
    const userId = req.user.id;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "avatars",
          transformation: [{ width: 300, height: 300, crop: "fill" }],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );
      stream.end(req.file.buffer);
    });

    const imageUrl = uploadResult.secure_url;
    await updateUserAvatar(userId, imageUrl);

    res.status(200).json({
      success: true,
      message: "Avatar updated",
      data: { image: imageUrl },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

export {
  deleteUser,
  updateUserName,
  updateUserPrompt,
  sendConfession,
  getReceivedConfessions,
  getSentConfessions,
  getRecipient,
  updateAvatar,
};
