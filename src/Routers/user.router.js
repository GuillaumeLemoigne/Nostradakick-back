import { Router } from "express";

const userRouter = Router();

// Les routes de notre API CRUD de gestion des utilisateurs
userRouter.get("/api/users", (req, res) => {
	res.send("coucou");
});
userRouter.get("/api/users/profil");
userRouter.post("/api/users");
userRouter.patch("/api/users/patch");
userRouter.delete("/api/users/delete");

export default userRouter;
