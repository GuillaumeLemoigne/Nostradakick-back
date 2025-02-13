import { Router } from "express";
import matchController from "../Controllers/match.controller.js";

const matchRouter = Router();

// Route permettant de récupérer tous les matchs
matchRouter.get("/api/matchs", matchController.getAllMatch);

// Route permettant de réucupérer UNIQUEMENT les matchs terminés
matchRouter.get("/api/results", matchController.getEndedMatch);

// Route permettant de récupérer UNIQUEMENT les matchs à venir
matchRouter.get("/api/calendar", matchController.getUpcomingMatch);

// La route vers l'API externe de consultation des résultats des matchs en cours
matchRouter.get("/api/inplay");




export { matchRouter };
