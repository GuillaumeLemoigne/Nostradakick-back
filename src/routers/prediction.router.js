import { Router } from "express";
import predictionController from "../controllers/prediction.controller.js";

const predictionRouter = Router();

// Les routes de notre API CRUD de gestion des pronostics
predictionRouter.get("/api/predictions", predictionController.getAllPredictions);
predictionRouter.get("/api/predictions/:id", predictionController.getOnePrediction);
predictionRouter.post("/api/predictions", predictionController.createOnePrediction);
predictionRouter.patch("/api/predictions/:id", predictionController.patchOnePrediction);
predictionRouter.delete("/api/predictions/:id", predictionController.deleteOnePrediction);

export { predictionRouter };
