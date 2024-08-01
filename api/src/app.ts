import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
	response.json({ msg: "Hello, world" });
});

export default app;
