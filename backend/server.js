import express from "express";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js"

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/auth", authRouter);

app.use("/user", userRouter)

