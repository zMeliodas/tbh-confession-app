export const validateNewPrompt = (req, res, next) => {
  let { newPrompt } = req.body;

  if (
    !newPrompt ||
    newPrompt.trim().length < 10 ||
    newPrompt.trim().length > 100
  ) {
    return res.status(400).json({
      success: false,
      error: "Prompt is required and must be between 32 and 100 characters",
    });
  }

  next();
};
