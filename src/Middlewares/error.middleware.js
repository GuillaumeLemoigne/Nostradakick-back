const notFound = (req, res, next) => {
	const error = new Error("ressource non trouvée");
	error.statusCode = 404;
	next(error);
};

const errorHandler = (error, req, res, next) => {
	const status = error.statusCode || 500;

	// Afin de forcer pour que la clé "error" soit toujours du même format, on force un tableau
	// (car le tableau est le format qu'on a utilisé pour les messages d'erreur avec Joi)
	res.status(status).json({
		status,
		error: Array.isArray(error.message) ? error.message : [error.message],
	});
};

export { notFound, errorHandler };
