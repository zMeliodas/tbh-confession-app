export const validateAuthPayload = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || username.trim().length < 3 || username.trim().length > 50) {
    return res.status(400).json({
      success: false,
      error: "Username is required and must be a non-empty string",
    });
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
    return res.status(400).json({
      success: false,
      error: "Username can only contain letters, numbers, and undescores",
    });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      success: false,
      error: "Password is required and must be at least 8 characters",
    });
  }

  next();
};