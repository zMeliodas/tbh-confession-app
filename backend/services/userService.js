import pool from "../config/db.js";

async function deleteUserAccount(username) {
  const result = await pool.query("DELETE FROM users WHERE user_name = $1", [
    username,
  ]);

  if (result.rowCount === 0) {
    return { success: false, message: "User not found or already deleted" };
  }

  return {
    success: true,
    message: "User deleted successfully",
  };
}

async function updateUser(currentUserName, newUserName) {
  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_name = $2",
      [newUserName, currentUserName]
    );

    if (result.rowCount === 0) {
      return { success: false, message: "User not found" };
    }

    return {
      success: true,
      message: "Username updated",
    };
  } catch (error) {
    // Check for duplicate username error (PostgreSQL error code 23505)
    if (error.code === "23505") {
      return { success: false, message: "The new username is already taken" };
    }

    throw error;
  }
}

async function updatePrompt(newPrompt, username) {
  const result = await pool.query(
    "UPDATE users SET user_prompt = $1 WHERE user_name = $2",
    [newPrompt, username]
  );

  if (result.rowCount === 0) {
    return { success: false, message: "User not found" };
  }

  return {
    success: true,
    message: "Prompt Updated",
  };
}

export { deleteUserAccount, updateUser, updatePrompt };
