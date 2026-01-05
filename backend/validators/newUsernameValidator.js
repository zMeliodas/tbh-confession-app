export const validateNewUsername = (req, res, next) => {
  let { newUserName } = req.body;

  if (!newUserName || newUserName.trim().length < 3 || newUserName.trim().length > 30) {
    return res.status(400).json({
      success: false,
      error: "Username is required and must be between 3 and 30 characters",
    });
  }

  if (!/^[a-zA-Z0-9_]+$/.test(newUserName.trim())) {
    return res.status(400).json({
      success: false,
      error: "Username can only contain letters, numbers, and underscores",
    });
  }

  next();
};