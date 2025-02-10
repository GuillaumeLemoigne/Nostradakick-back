import "dotenv/config";
import express from "express";
import { router } from "./src/Router/router.js";
import expressSanitizer from "express-sanitizer";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(expressSanitizer());
app.use(cors());
// Mise en commentaire du router car pas encore fonctionnel
app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});
