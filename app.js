import "dotenv/config";
import express from "express";
// modifier le nom du fichier match router
import { matchRouter } from "./src/routers/match.router.js";
import { predictionRouter } from "./src/routers/prediction.router.js";
import { userRouter } from "./src/routers/user.router.js";
import {authentificationRouter} from "./src/routers/authentification.router.js";
import expressSanitizer from "express-sanitizer";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(expressSanitizer());
app.use(cors());

app.use(matchRouter, predictionRouter, userRouter, authentificationRouter);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
