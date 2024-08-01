import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import postRouter from "./routes/post.routes";
import authRouter from "./routes/auth.routes";
import config from "./utils/config";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: config.CLIENT_URL,
		credentials: true,
	})
);

// Routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/auth", authRouter);

export default app;
