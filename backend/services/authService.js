import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { generateToken } from "../utils/jwtTokenGenerator.js";

dotenv.config();

async function registerUser(username, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    const user = newUser.rows[0];
    const token = generateToken(user);

    return {
      success: true,
      message: "User registered successfully",
      token,
      user: {
        user_id: user.user_id,
        user_name: user.user_name,
      },
    };
  } catch (error) {
    if (error.code === "23505") {
      // PostgreSQL unique violation code
      return {
        success: false,
        message: "Username already taken",
      };
    }

    console.error("Registration service error:", error);
    throw new Error("Registration failed");
  }
}

async function loginUser(username, password) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE user_name = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.user_password);

    if (!validPassword) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    const token = generateToken(user);

    return {
      success: true,
      message: "Login successful",
      token,
      user: {
        user_id: user.user_id,
        user_name: user.user_name,
      },
    };
  } catch (error) {
    console.error("Login service error:", error);
    throw new Error("Login failed");
  }
}

export { registerUser, loginUser };
