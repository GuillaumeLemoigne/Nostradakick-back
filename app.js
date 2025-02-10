import "dotenv/config";
import express from "express";
// modifier le nom du fichier match router
import { matchRouter } from "./src/routers/matchRouter.js";
import { pronosRouter } from "./src/routers/pronos.router.js";
import { userRouter } from "./src/routers/user.router.js";
import expressSanitizer from "express-sanitizer";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(expressSanitizer());
app.use(cors());
// Mise en commentaire du router car pas encore fonctionnel
app.use(matchRouter, pronosRouter, userRouter);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
