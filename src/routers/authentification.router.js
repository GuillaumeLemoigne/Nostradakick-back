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
	// Récupérer le JWT depuis les Headers
	const authHeader = req.headers.authorization;

	// Vérification de l'existance du token
	if (!authHeader) {
		return res
			.status(401)
			.json({ authenticated: false, message: "Token manquant" });
	}

	// Extraire le token après "Bearer"
	const token = authHeader.split(" ")[1];

	try {
		// Vérifier le JWT
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		// Réponse avec le user et le authenticated
		return res.status(200).json({ authenticated: true, user: decoded });
	} catch (err) {
		return res
			.status(401)
			.json({ authenticated: false, message: "Token invalide ou expiré" });
	}
});

export { authentificationRouter };
