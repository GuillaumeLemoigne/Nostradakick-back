import { Router } from "express";
import matchController from "../controllers/match.controller.js";
import { authHandler } from "../Middlewares/auth.jwt.js";

const matchRouter = Router();

matchRouter.get("/api/matchs", matchController.getAllMatch);

// La route de notre API de consultation de tous les matchs sur lesquels l'utilisateur à parié depuis son inscription et des matchs sur lesquels il a parié et qui ne se sont pas encore déroulés.
// Route non MVP à déterminer pour la partie "profil" de l'utilisateur
matchRouter.get("/api/matchs/profil", authHandler, matchController.getAllMatch);

// Les routes de notre API CRUD de gestion des résultats des matchs de football passés
matchRouter.get("/api/results", matchController.getEndedMatch);

// La routes de notre API de consultation du calendrier des matchs à venir dans la compétition
matchRouter.get("/api/calendar", matchController.getUpcomingMatch);

// La route de notre API de consultation des matchs à venir sur lesquels l'utilisateur à parié
matchRouter.get(
	"/api/calendar/profil",
	authHandler,
	matchController.getUpcomingMatchPredictions,
);

// La route de notre API de consultation des informations (principalement le résultat) des matchs de football en cours
matchRouter.get("/api/inplay");

export { matchRouter };
