import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_LIFETIME = process.env.JWT_LIFETIME || "1d";

export default {
	PORT,
	JWT_SECRET,
	JWT_LIFETIME,
};
