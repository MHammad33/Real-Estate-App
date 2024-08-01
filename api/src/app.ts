import express from "express";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.routes";
import authRouter from "./routes/auth.routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/auth", authRouter);

export default app;
