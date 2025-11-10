import pool from "../db.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

async function registerUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await pool.query(
    "INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *",
    [username, hashedPassword]
  );

  return {
    success: true,
    message: "User registered sucessfully",
  };
}

async function loginUser(username, password) {
  const result = await pool.query(
    "SELECT * FROM users WHERE user_name = $1 LIMIT 1",
    [username]
  );

  if (result.rows.length === 0) {
    return res.status(401).send("Username doesn't exist");
  }

  const user = result.rows[0];
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      id: user.user_id,
      username: user.user_name,
    },
    jwtSecretKey,
    { expiresIn: "1h" }
  );

  const validPassword = await bcrypt.compare(password, user.user_password);

  if (!validPassword) {
    return res.status(401).send("Incorrect password");
  }

  return {
    success: true,
    message: "Login successful",
    token,
  };
}

export { registerUser, loginUser };
