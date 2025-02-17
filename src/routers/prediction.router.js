import { Router } from "express";
import predictionController from "../controllers/prediction.controller.js";
import { authHandler } from "../Middlewares/auth.jwt.js";

const predictionRouter = Router();

// Les routes de notre API CRUD de gestion des pronostics
predictionRouter.get(
	"/api/predictions",
	predictionController.getAllPredictions,
);
predictionRouter.get(
	"/api/predictions/:id",
	authHandler,
	predictionController.getOnePrediction,
);
predictionRouter.post(
	"/api/predictions",
	authHandler,
	predictionController.createOnePrediction,
);
predictionRouter.patch(
	"/api/predictions/:id",
	authHandler,
	predictionController.patchOnePrediction,
);
predictionRouter.delete(
	"/api/predictions/:id",
	authHandler,
	predictionController.deleteOnePrediction,
);

export { predictionRouter };
