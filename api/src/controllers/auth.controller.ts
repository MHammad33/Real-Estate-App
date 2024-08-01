import { Request, Response } from "express";

// POST /api/v1/auth/login
const loginUser = (req: Request, res: Response) => {
	res.json({ msg: "Login User" });
};

// POST /api/v1/auth/register
const registerUser = (req: Request, res: Response) => {
	console.log(req.body);
	res.json({ msg: "Register User" });
};

// POST /api/v1/auth/logout
const logoutUser = (req: Request, res: Response) => {
	res.json({ msg: "Logout User" });
};

export default {
	loginUser,
	registerUser,
	logoutUser,
};
