import { Router } from "express";

const pronosRouter = Router();

// Les routes de notre API CRUD de gestion des pronostics
pronosRouter.get("/api/pronos");
pronosRouter.get("/api/pronos/:id");
pronosRouter.post("/api/pronos");
pronosRouter.patch("/api/pronos/:id");
pronosRouter.delete("/api/pronos/:id");

export default pronosRouter;
