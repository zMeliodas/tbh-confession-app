export const validateAuthPayload = (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({
      success: true,
      error: "Username is required and must be a non-empty string",
    });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      success: true,
      error: "Password is required and must be at least 8 characters",
    });
  }

  next();
};