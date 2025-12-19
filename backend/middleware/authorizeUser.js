import jwt from "jsonwebtoken";

export const authorizeUser = (req, res, next) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(403).json({
        error: "Authorization header missing",
      });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(403).json({
        error: "Token missing",
      });
    }

    const payload = jwt.verify(token, jwtSecretKey);

    req.user = payload;
    
    next();
  } catch (error) {
    return res.status(403).json({
      error: "Invalid Token",
    });
  }
};
