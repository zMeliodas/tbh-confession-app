import pool from "../config/db.js";

async function createMessage(senderId, receiverId, content) {
  const result = await pool.query(
    "INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3) RETURNING *",
    [senderId, receiverId, content]
  );

  return {
    success: true,
    message: "Message created successfully",
    messageData: result.rows[0],
  };
}

export { createMessage };
