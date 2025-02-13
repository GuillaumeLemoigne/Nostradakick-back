import { Router } from "express";
import matchController from "../Controllers/match.controller.js";

const matchRouter = Router();

matchRouter.get("/api/matchs", matchController.getAllMatch);

// Les routes de notre API CRUD de gestion des résultats des matchs de football passés
matchRouter.get("/api/results");

// La routes de notre API de consultation du calendrier des matchs à venir dans la compétition
matchRouter.get("/api/calendar");

// La route de notre API de consultation des informations (principalement le résultat) des matchs de football en cours
matchRouter.get("/api/inplay");

export { matchRouter };
