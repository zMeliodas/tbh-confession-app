import { registerUser, loginUser } from "../services/authService.js";

async function register(req, res) {
  try {
    const { username, password } = req.body;

    const result = await registerUser(username, password);

    if (!result.success) {
      return res.status(401).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(201).json({
      success: result.success,
      message: result.message,
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const result = await loginUser(username, password);

    if (!result.success) {
      return res.status(401).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(200).json({
      success: result.success,
      message: result.message,
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

async function verifyUser(req, res) {
  res.status(200).json({
    success: true,
    user: {
      user_id: req.user.id,
      user_name: req.user.username,
      user_prompt: req.user.prompt ?? null,
    },
  });
}

export { register, login, verifyUser };
