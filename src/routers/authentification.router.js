import { Router } from "express";
import authentificationController from "../controllers/authentification.controller.js";

const authentificationRouter = Router();

authentificationRouter.get(
	"/api/login",
	authentificationController.handleLogin,
);

authentificationRouter.post("/test-post", (req, res) => {
	console.log("Request body:", req.body);
	res.json({ message: "POST request received", data: req.body });
});

export { authentificationRouter };
