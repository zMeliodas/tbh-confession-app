export const validateCreateAMessage = (req, res, next) => {
  let { receiver, content } = req.body;

  if (!receiver || !content || content.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: "Invalid message data",
    });
  }

  if (content.length > 500) {
    return res.status(400).json({
      success: false,
      error: "Message too long",
    });
  }

  next();
};
