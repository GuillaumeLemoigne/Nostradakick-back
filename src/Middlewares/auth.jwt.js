import jwt from "jsonwebtoken";

const authHandler = (req, res, next) => {
    // Récupérer le token
    const authHeader = req.headers.authorization;

	console.log(`etape1:${authHeader}`);


    // Vérification de l'existence du token
    if (!authHeader) {
        const error = new Error("Token manquant");
        error.status = 401;
        return next(error);
    }

	// Extraire le token après "Bearer"
	const token = authHeader.split(" ")[1];

    // Vérification du token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
		console.log(`etape3:${JSON.stringify(req.user, null, 2)}`);
		
        next();
    } catch (error) {
        error.message = "Token invalide";
        error.status = 401;
        return next(error);
    }
};

export { authHandler };
