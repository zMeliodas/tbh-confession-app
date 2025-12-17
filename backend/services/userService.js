import pool from "../config/db.js";

async function deleteUserAccount(username) {
  const result = await pool.query("DELETE FROM users WHERE user_name = $1", [
    username,
  ]);

   if (result.rowCount === 0) {
    return {
      success: false,
      message: "User not found",
    };
  }

  return {
    success: true,
    message: "User deleted successfully",
  };
}


export { deleteUserAccount };