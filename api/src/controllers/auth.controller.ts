import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import prismaClient from "../utils/prisma";

// POST /api/v1/auth/login
const loginUser = (req: Request, res: Response) => {
	res.json({ msg: "Login User" });
};

// POST /api/v1/auth/register
const registerUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const { username, email } = req.body;

	const salt = await bcryptjs.genSalt(10);
	const hashedPassword = await bcryptjs.hash(req.body?.password, salt);

	try {
		const newUserCreated = await prismaClient.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		res.status(201).json({ msg: "User Created Successfully", newUserCreated });
	} catch (error) {
		console.log("Error creating a new user", error);
		res.status(500).json({ msg: error });
	}
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
