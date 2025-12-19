import { registerUser, loginUser } from "../services/authService.js";
import { getUserById } from "../services/userService.js";

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
  try {
    const result = await getUserById(req.user.id);

    res.status(200).json({
      success: true,
      user: {
        user_id: result.user.user_id,
        user_name: result.user.user_name,
        user_prompt: result.user.user_prompt,
      },
    });
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
}

export { register, login, verifyUser };
