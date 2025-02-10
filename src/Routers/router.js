import { Router } from "express";

const router = Router();


=======
// Les routes de notre API CRUD de gestion des résultats des matchs de football passés
>>>>>>> 1ab5d62f296aaaf32f1184ee2e2be84a9217b910:src/Routers/router.js
router.get("/api/results");

// La routes de notre API de consultation du calendrier des matchs à venir dans la compétition
router.get("/api/calendar");

// La route de notre API de consultation des informations (principalement le résultat) des matchs de football en cours
router.get("/api/inplay");

export { router };
