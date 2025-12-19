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

async function getUserById(userId) {
  const result = await pool.query(
    "SELECT user_id, user_name, user_prompt FROM users WHERE user_id = $1",
    [userId]
  );

  if (result.rows.length === 0) {
    throw new Error("User not found");
  }

  return {
    success: true,
    message: "User fetched successfully",
    user: result.rows[0],
  };
}

async function updateUser(currentUserName, newUserName) {
  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_name = $2 RETURNING *",
      [newUserName, currentUserName]
    );

    if (result.rowCount === 0) {
      return { success: false, message: "User not found" };
    }

    return {
      success: true,
      message: "Username updated",
      user: result.rows[0],
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
    "UPDATE users SET user_prompt = $1 WHERE user_name = $2 RETURNING *",
    [newPrompt, username]
  );

  if (result.rowCount === 0) {
    return { success: false, message: "User not found" };
  }

  return {
    success: true,
    message: "Prompt Updated",
    user: result.rows[0],
  };
}

export { deleteUserAccount, updateUser, updatePrompt, getUserById };
