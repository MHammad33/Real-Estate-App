import app from "./app";
import config from "./utils/config";

const startServer = async () => {
	try {
		app.listen(config.PORT, () =>
			console.log(`Server listening on port ${config.PORT}`)
		);
	} catch (error: any) {
		console.log("Error starting the server:", error.message);
	}
};

startServer();
