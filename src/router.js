import { Router } from "express";

const router = Router();

// Les routes de notre API CRUD de gestion des utilisateurs
router.get("/api/users", (req, res) => {
	res.send("coucou");
});
router.get("/api/users/profil");
router.post("/api/users");
router.patch("/api/users/patch");
router.delete("/api/users/delete");

// Les routes de notre API CRUD de gestion des pronostics
router.get("/api/pronos");
router.get("/api/pronos/:id");
router.post("/api/pronos");
router.patch("/api/pronos/:id");
router.delete("/api/pronos/:id");

// Les routes de notre API de gestion des résultats des matchs de football passés
router.get("/api/results");

// La routes de notre API de consultation du calendrier des matchs à venir dans la compétition
router.get("/api/calendar");

// La route de notre API de consultation des informations (principalement le résultat) des matchs de football en cours
router.get("/api/inplay");

export { router };
