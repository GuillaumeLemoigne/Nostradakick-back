import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

// Les routes de notre API CRUD de gestion des utilisateurs
userRouter.get("/api/users", userController.getAllUsers);
userRouter.get("/api/users/:id", userController.getTheUser);
userRouter.post("/api/users", userController.createOneUser);
userRouter.patch("/api/users/patch", userController.patchOneUser);
userRouter.delete("/api/users/:id", userController.deleteOneUser);

export { userRouter };
