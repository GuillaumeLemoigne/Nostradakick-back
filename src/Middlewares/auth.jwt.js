import jwt from "jsonwebtoken";

const authHandler = (req, res, next) => {
	// Récupérer le token depuis le cookie
	const token = req.cookies.jwt;

	// Vérif de l'existance du token
	if (!token) {
		const error = new Error("Token manquant");
		error.status = 401;
		return next(error);
	}

	// Vérif du token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		error.message = "Token invalide";
		error.status = 401;
		return next(error);
	}
};

export { authHandler };
