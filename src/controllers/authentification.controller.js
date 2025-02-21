import { User } from "../models/associations.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const authentificationController = {
	handleSignin: async (req, res, next) => {
		try {
			// Destructuration du req.body
			const { email, password } = req.body;

			// Récupération du user
			const user = await User.findOne({
				where: { email },
			});

			if (!user) {
				// Vérification du user s'il existe
				return next();
			}

			// Hash du Mot de passe
			const checkPassword = await argon2.verify(user.password, password);

			if (!checkPassword) {
				// Vérification du Hash
				return next();
			}

			// Création de l'objet a donner pour le JWT
			const payload = {
				user_id: user.user_id,
				pseudo: user.pseudo,
				email: user.email,
				password: user.password,
			};

			const options = {
				expiresIn: "5h", // Le token expire dans 5 heure
			};

			// Création du token JWT
			const token = jwt.sign(payload, process.env.JWT_SECRET, options);
			console.log(token);
			

			// Message renvoyé
			return res
				.status(201)
				.json({ message: "Authentifié avec succès", token: token });
		} catch (error) {
			console.log(error);
		}
	},
};

export default authentificationController;
