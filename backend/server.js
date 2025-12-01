import express from "express";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js"

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/user", userRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});