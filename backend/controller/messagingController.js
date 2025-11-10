import {
  createMessage,
  createChatMessage,
  getChatMessages,
} from "../services/messagingService.js";

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

async function chatMessage(req, res) {
  try {
    const { senderId, receiverId, content, is_read } = req.body;

    const result = await createChatMessage(
      senderId,
      receiverId,
      content,
      is_read
    );

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

async function getChatHistory(req, res) {
  try {
    console.log(req)
    const { userId1, userId2 } = req.body;

    const result = await getChatMessages(userId1, userId2);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "Error",
      });
    }

    res.status(201).json({
      success: result.success,
      message: result.message,
      messageData: result.messageData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { message, chatMessage, getChatHistory };
