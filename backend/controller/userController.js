import { deleteUserAccount } from "../services/userService.js";

async function deleteUser(req, res) {
  try {
    const { username } = req.body;

    const result = await deleteUserAccount(username);

    if (!result.success) {
      return res.status(401).json({
        success: result.success,
        error: result.message,
      });
    }

    res.status(201).json({
      success: result.success,
      message: result.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

export { deleteUser };
