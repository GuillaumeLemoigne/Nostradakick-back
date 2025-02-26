import "dotenv/config";
import express from "express";

// modifier le nom du fichier match router
import { matchRouter } from "./src/routers/match.router.js";
import { predictionRouter } from "./src/routers/prediction.router.js";
import { userRouter } from "./src/routers/user.router.js";
import { authentificationRouter } from "./src/routers/authentification.router.js";
import expressSanitizer from "express-sanitizer";
import cors from "cors";
import { notFound, errorHandler } from "./src/Middlewares/error.middleware.js";

const app = express();

// Middleware pour lire les json
app.use(express.json());

app.use(expressSanitizer());

// Autorisation CORS
app.use(
	cors({
		// origin: "http://localhost:5173", // URL frontend
	}),
);

// Route
app.use(matchRouter);
app.use(predictionRouter);
app.use(userRouter);
app.use(authentificationRouter);

// Route erreur
app.use(notFound, errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
