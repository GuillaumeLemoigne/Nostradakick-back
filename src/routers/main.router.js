import { Router } from "express";
import { mainController } from "../controllers/main.controller.js";

const mainRouter = Router();


// Afficher la page d'acceuil

mainRouter.get("/",mainController.getUpcomingMatch);



export {mainRouter};