import { Router } from "express";
import jwt from "jsonwebtoken";
import authentificationController from "../controllers/authentification.controller.js";

const authentificationRouter = Router();

authentificationRouter.post(
	"/api/signin",
	authentificationController.handleSignin,
);

// Route pour check l'authentification
authentificationRouter.get("/api/auth/check", (req, res) => {
	console.log(
		"je suis dans la route de test et voici les données : ",
		req.cookies,
	);

	const token = req.cookies.jwt; // Récupérer le JWT depuis les cookies

	if (!token) {
		return res
			.status(401)
			.json({ authenticated: false, message: "Token manquant" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifier le JWT
		return res.status(200).json({ authenticated: true, user: decoded });
	} catch (err) {
		return res
			.status(401)
			.json({ authenticated: false, message: "Token invalide ou expiré" });
	}
});

export { authentificationRouter };
