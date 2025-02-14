import "dotenv/config";
import express from "express";
// modifier le nom du fichier match router
import { mainRouter } from "./src/routers/main.router.js";
import { authHandler } from "./src/Middlewares/auth.jwt.js";
import { matchRouter } from "./src/routers/match.router.js";
import { predictionRouter } from "./src/routers/prediction.router.js";
import { userRouter } from "./src/routers/user.router.js";
import {authentificationRouter} from "./src/routers/authentification.router.js";
import expressSanitizer from "express-sanitizer";
import cors from "cors";
import { notFound,errorHandler } from "./src/Middlewares/error.middleware.js";
import { mainController } from "./src/controllers/main.controller.js";


const app = express();

app.use(express.json());
app.use(expressSanitizer());
app.use(cors());

// Routes publiques
app.use(mainRouter);
app.use(authentificationRouter);

// Routes privées
app.use(matchRouter, authHandler);
app.use(predictionRouter, authHandler);
app.use(userRouter, authHandler);
app.use(authentificationRouter, authHandler);

app.use(notFound, errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
