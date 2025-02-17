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
import cookieParser from "cookie-parser";

const app = express();

// Middleware pour lire les json
app.use(express.json());

// Middleware pour lire les cookies
app.use(cookieParser());

app.use(expressSanitizer());
app.use(
	cors({
		origin: "http://localhost:5173", // Remplace par l'URL de ton frontend
		credentials: true, // Autorise l'envoi des cookies
	}),
);

app.use(matchRouter);
app.use(predictionRouter);
app.use(userRouter);
app.use(authentificationRouter);

app.use(notFound, errorHandler);

app.use(notFound, errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
