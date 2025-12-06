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

async function createChatMessage(senderId, receiverId, content, is_read) {
  const result = await pool.query(
    "INSERT INTO chat_messages (sender_id, receiver_id, content, is_read) VALUES ($1, $2, $3, $4) RETURNING *",
    [senderId, receiverId, content, is_read]
  );

  return {
    success: true,
    message: "Message created successfully",
    messageData: result.rows[0],
  };
}

async function getChatMessages(user1, user2) {
  const result = await pool.query(
    `SELECT 
          cm.id,
          cm.sender_id,
          sender.user_name AS sender_name,
          cm.receiver_id,
          receiver.user_name AS receiver_name,
          cm.content,
          cm.is_read,
          cm.created_at,
          CASE 
              WHEN cm.sender_id = $1 THEN 'sent'
              ELSE 'received'
          END AS direction
       FROM chat_messages cm
       JOIN users sender ON cm.sender_id = sender.user_id
       JOIN users receiver ON cm.receiver_id = receiver.user_id
       WHERE (cm.sender_id = $1 AND cm.receiver_id = $2)
          OR (cm.sender_id = $2 AND cm.receiver_id = $1)
       ORDER BY cm.created_at ASC`,
    [user1, user2]
  );

  return {
    success: true,
    message: "Messages fetched successfully",
    messageData: result.rows,
  };
}

export { createMessage, getChatMessages, createChatMessage };
