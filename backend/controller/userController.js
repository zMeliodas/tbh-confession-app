import { getCredentials } from "../services/userService.js";

async function getProfile(req, res) {
  try {
    const { userId } = req.body;

    const result = await getCredentials(userId);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "Error",
      });
    }

    res.status(201).json({
      success: true,
      message: result.message,
      user: result.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { getProfile };
