import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

// POST /api/v1/auth/login
const loginUser = (req: Request, res: Response) => {
	res.json({ msg: "Login User" });
};

// POST /api/v1/auth/register
const registerUser = async (req: Request, res: Response) => {
	console.log(req.body);

	const salt = await bcryptjs.genSalt(10);
	const hashedPassword = await bcryptjs.hash(req.body?.password, salt);

	console.log(hashedPassword);

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
