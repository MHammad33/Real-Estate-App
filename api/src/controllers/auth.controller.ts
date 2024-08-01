import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prismaClient from "../utils/prisma";
import config from "../utils/config";

// POST /api/v1/auth/login
const loginUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const { username, password } = req.body;

	try {
		const userInDb = await prismaClient.user.findUnique({
			where: { username },
		});
		if (!userInDb) {
			return res.status(404).json({ msg: "Invalid Username or Password" });
		}

		const isPasswordCorrect = await bcryptjs.compare(
			password,
			userInDb.password
		);
		if (!isPasswordCorrect) {
			return res.status(401).json({ msg: "Invalid Username or Password" });
		}

		const userInfoForToken = {
			id: userInDb.id,
		};
		const token = jwt.sign(userInfoForToken, config.JWT_SECRET, {
			expiresIn: config.JWT_LIFETIME,
		});

		const cookieAge = 1000 * 60 * 60 * 24 * 7;
		res
			.cookie("token", token, {
				httpOnly: true,
				// secure: true, -- use when you have https connection
				maxAge: cookieAge,
			})
			.status(200)
			.json({ msg: "Login success" });
	} catch (error) {
		console.log("Error creating a new user", error);
		res.status(500).json({ msg: error });
	}
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
	res.clearCookie("token").status(200).json({ msg: "Logout Successfull" });
};

export default {
	loginUser,
	registerUser,
	logoutUser,
};
