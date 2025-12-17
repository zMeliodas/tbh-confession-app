export const validateAuthPayload = (req, res, next) => {
  let { username, password } = req.body;

  username = username?.trim();

  if (!username || username.length < 3 || username.length > 30) {
    return res.status(400).json({
      success: false,
      error: "Username is required and must be a non-empty string",
    });
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return res.status(400).json({
      success: false,
      error: "Username can only contain letters, numbers, and underscores",
    });
  }

  if (!password || password.trim().length < 8) {
    return res.status(400).json({
      success: false,
      error: "Password is required and must be at least 8 characters",
    });
  }

  next();
};