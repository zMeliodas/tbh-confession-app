import pool from "../db.js";

async function getCredentials(userId) {
  const result = await pool.query(
    "SELECT user_id, user_name FROM users WHERE user_id = $1",
    [userId]
  );

  if (result.rows.length === 0)
    return res.status(404).json({
      error: "User not found",
    });

  return {
    success: true,
    message: "User found",
    user: {
      userId: result.rows[0].user_id,
      username: result.rows[0].user_name,
    },
  };
}

export { getCredentials };