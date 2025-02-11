import { Router } from "express";

const pronosRouter = Router();

// Les routes de notre API CRUD de gestion des pronostics
pronosRouter.get("/api/predictions", predictionController.getAllPrediction);
pronosRouter.get("/api/predictions/:id", predictionController.getOnePrediction);
pronosRouter.post("/api/predictions");
pronosRouter.patch("/api/predictions/:id");
pronosRouter.delete("/api/predictions/:id");

export { pronosRouter };
