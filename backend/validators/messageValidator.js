export const validateCreateAMessage = (req, res, next) => {
  let { senderId, receiverId, content } = req.body;

  if (!senderId || !receiverId || !content?.trim()) {
    return res.status(404).json({
      success: false,
      error: "Sender, receiver, and content are required",
    });
  }

  next();
};
