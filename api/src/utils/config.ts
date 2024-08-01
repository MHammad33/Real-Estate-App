import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_LIFETIME = process.env.JWT_LIFETIME || "1d";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173/";

export default {
	PORT,
	JWT_SECRET,
	JWT_LIFETIME,
	CLIENT_URL,
};
