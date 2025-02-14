import { Router } from "express";
import authentificationController from "../controllers/authentification.controller.js"
import userController from "../controllers/user.controller.js";

const authentificationRouter = Router();

authentificationRouter.post("/api/signin", authentificationController.handleSignin);
authentificationRouter.post("/api/signup",userController.createOneUser);

export {authentificationRouter};