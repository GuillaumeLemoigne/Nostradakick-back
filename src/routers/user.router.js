import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { authHandler } from "../Middlewares/auth.jwt.js";

const userRouter = Router();

// Les routes de notre API CRUD de gestion des utilisateurs
userRouter.get("/api/users", userController.getAllUsers);
userRouter.get("/api/users/profil", authHandler, userController.getTheUser);
userRouter.post("/api/users", userController.createOneUser);
userRouter.patch("/api/users/patch", authHandler, userController.patchOneUser);
userRouter.delete("/api/users/:id", authHandler, userController.deleteOneUser);

export { userRouter };
