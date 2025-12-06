import express from "express";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
