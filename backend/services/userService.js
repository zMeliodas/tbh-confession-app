import pool from "../config/db.js";

async function deleteUserAccount(userId) {
  const result = await pool.query("DELETE FROM users WHERE user_id = $1", [
    userId,
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

async function updateUser(userId, newUserName) {
  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1 WHERE user_id = $2 RETURNING *",
      [newUserName, userId]
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

async function updatePrompt(userId, newPrompt) {
  const result = await pool.query(
    "UPDATE users SET user_prompt = $1 WHERE user_id = $2 RETURNING *",
    [newPrompt, userId]
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

async function confession(senderId, receiverUsername, content) {
  const receiverResult = await pool.query(
    "SELECT user_id FROM users WHERE user_name = $1",
    [receiverUsername]
  );

  if (receiverResult.rowCount === 0) {
    throw new Error("Recipient username not found");
  }

  const receiverId = receiverResult.rows[0].user_id;

  const result = await pool.query(
    `INSERT INTO messages (sender_id, receiver_id, content)
     VALUES ($1, $2, $3)
     RETURNING message_id, created_at, content`,
    [senderId, receiverId, content]
  );

  return {
    success: true,
    message: "Confession sent",
    data: result.rows[0],
  };
}

async function getReceivedConfessionsById(userId) {
  const result = await pool.query(
    `SELECT message_id, content, created_at 
     FROM messages 
     WHERE receiver_id = $1
     ORDER BY created_at DESC`,
    [userId]
  );

  return {
    success: true,
    message:
      result.rowCount === 0 ? "No received messages yet." : "Messages retrieved",
    data: result.rows,
  };
}

async function getSentConfessionsById(userId) {
  const result = await pool.query(
    `SELECT message_id, content, created_at 
     FROM messages 
     WHERE sender_id = $1
     ORDER BY created_at DESC`,
    [userId]
  );

  return {
    success: true,
    message:
      result.rowCount === 0 ? "No sent messages yet." : "Messages retrieved",
    data: result.rows,
  };
}

export {
  deleteUserAccount,
  updateUser,
  updatePrompt,
  getUserById,
  confession,
  getReceivedConfessionsById,
  getSentConfessionsById,
};
