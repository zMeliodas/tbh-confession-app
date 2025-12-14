import jwt from "jsonwebtoken";

export const authorizeUser = (req, res, next) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.headers["authorization"].split(" ")[1];

    if (!token)
      return res.status(403).json({
        error: "Not Authorized",
      });

    const payload = jwt.verify(token, jwtSecretKey);
 
    req.user = payload;
  } catch (error) {
    return res.status(403).json({
      error: "Invalid Token",
    });
  }

  next();
};
