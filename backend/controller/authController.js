import { registerUser, loginUser } from "../services/authService.js";

async function register(req, res) {
  try {
    const { username, password } = req.body;

    const result = await registerUser(username, password);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "Error",
      });
    }

    res.status(201).json({
      success: true,
      message: result.message,
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
      return res.status(400).json({
        success: false,
        error: result.message,
      });
    }

    res.status(201).json({
      success: true,
      message: result.message,
      token: result.token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { register, login };
