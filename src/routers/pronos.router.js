import { Router } from "express";
import predictionController from "../Controllers/prediction.controller.js";

const pronosRouter = Router();

// Les routes de notre API CRUD de gestion des pronostics
pronosRouter.get("/api/predictions", predictionController.getAllPredictions);
pronosRouter.get("/api/predictions/:id", predictionController.getOnePrediction);
pronosRouter.post("/api/predictions", predictionController.createOnePrediction);
pronosRouter.patch("/api/predictions/:id", predictionController.patchOnePrediction);
pronosRouter.delete("/api/predictions/:id", predictionController.deleteOnePrediction);

export { pronosRouter };
