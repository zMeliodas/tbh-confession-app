import { createMessage } from "../services/messagingService.js";

async function message(req, res) {
  try {
    const { senderId, receiverId, content } = req.body;

    const result = await createMessage(senderId, receiverId, content);

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

export { message };
