import pool from "../config/db.js";

async function deleteUserAccount(username) {
  await pool.query("DELETE FROM users WHERE user_name = $1", [username]);

  return {
    success: true,
    message: "User deleted successfully",
  };
}

export async function getUserByUsername(username) {
  const result = await pool.query("SELECT * FROM users WHERE user_name = $1", [
    username,
  ]);
  return result.rows[0];
}

async function updateUser(currentUserName, newUserName) {
  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_name = $2",
      [newUserName, currentUserName]
    );

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

export { deleteUserAccount, updateUser };
