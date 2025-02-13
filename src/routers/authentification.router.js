import { Router } from "express";
import authentificationController from "../controllers/authentification.controller.js"

const authentificationRouter = Router();

console.log("totu");
authentificationRouter.post("/api/signin", authentificationController.handleSignin);


// authentificationRouter.post("/api/signup",authentificationController.handleSignupSubmissionForm);

export {authentificationRouter};