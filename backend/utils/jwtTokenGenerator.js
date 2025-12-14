import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  return jwt.sign(
    {
      id: user.user_id,
      username: user.user_name,
    },
    jwtSecretKey,
    { expiresIn: "1h" }
  );
}
