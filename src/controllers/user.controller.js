import { User } from "../models/associations.js";
import Joi from "joi";
import argon2 from "argon2";

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const allUsers = await User.findAll({
				include: [
					{
						association: "prediction",
					},
				],
			});

			return res.status(200).json(allUsers);
		} catch (error) {
			console.error(error.message);
		}
	},

	getTheUser: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await User.findOne({
				where: {
					user_id: id,
				},
				include: [
					{
						association: "prediction",
					},
				],
			});

			if (!user) {
				return next();
			}

			return res.status(200).json(theUser);
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	},

	createOneUser: async (req, res) => {
		try {
			//* manque JOI pour que ça fonctionne *//
			const error = userController.validate(req.body);
			if (error) {
				return res.status(400).json({ message: error.details });
			}

			const hashedPassword = await argon2.hash(req.body.password);

			const createUser = await User.create({
				...req.body,
				password: hashedPassword,
			});
			if (createUser) {
				res.redirect("/signin");
				return res.status(201).json(createUser);
			}
			return res.status(404).json({ message: "User not created" });
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	},

	patchOneUser: async (req, res) => {
		try {
			const patchUser = await User.findByPk(11);
			if (!patchUser) {
				return res.status(404).json({ message: "This User doesn't exist" });
			}
			const { first_name, last_name, pseudo, email, password } = req.body;

			const error = userController.validate(req.body);
			if (error) {
				return res.status(400).json({ message: error.details });
			}

			if (!first_name && !last_name && !pseudo && !email && !password) {
				return res.status(400).json({ message: "Bad request" });
			}
			if (pseudo !== undefined) {
				patchUser.pseudo = pseudo;
			}
			if (email !== undefined) {
				patchUser.email = email;
			}
			if (password !== undefined) {
				const hashedPassword = await argon2.hash(password);
				patchUser.password = hashedPassword;
			}
			await patchUser.save();

			return res.status(201).json(patchUser);
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	},

	deleteOneUser: async (req, res) => {
		try {
			const { id } = req.params;
			const deleteUser = await User.destroy({
				where: {
					user_id: id,
				},
			});
			if (deleteUser) {
				return res.status(202).json(deleteUser);
			}
			return res.status(404).json({ message: "User not found" });
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	},

	validate(data) {
		// Schéma de validation des autres champs
		const validationSchema = Joi.object({
			first_name: Joi.string().min(2).max(150).messages({
				"string.base": "Le prénom doit être une chaîne de caractères",
				"string.min": "Le prénom doit contenir au minimum 2 lettres",
				"string.max": "Le prénom doit contenir au maximum 150 lettres",
			}),
			last_name: Joi.string().min(2).max(150).messages({
				"string.base": "Le nom doit être une chaîne de caractères",
				"string.min": "Le nom doit contenir au minimum 2 lettres",
				"string.max": "Le nom doit contenir au maximum 150 lettres",
			}),
			pseudo: Joi.string().min(2).max(150).required().messages({
				"string.base": "Le pseudo doit être une chaîne de caractères",
				"string.min": "Le pseudo doit contenir au minimum 2 lettres",
				"string.max": "Le pseudo doit contenir au maximum 150 lettres",
				"string.alphanum":
					"Le pseudo doit contenir des caractères alphanumériques",
				"string.required": "le pseudo est requis",
			}),
			email: Joi.string()
				.email({ tlds: { allow: false } })
				.required()
				.messages({
					"string.email": "L'adresse email doit être valide",
					"any.required": "L'adresse email est requise",
				}),
			password: Joi.string()
				.pattern(
					new RegExp(
						"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&*()!+=_-])[A-Za-z\\d@#$%^&*()!+=_-]{8,30}$",
					),
				)
				.required()
				.messages({
					"string.min":
						"Le mot de passe doit contenir au moins {#limit} caractères",
					"string.max":
						"Le mot de passe doit contenir au maximum {#limit} caractères",
					"any.required": "Le mot de passe est requis",

					/* 
                Au moins une minuscule (?=.*[a-z])
                Au moins une majuscule (?=.*[A-Z])
                Au moins un chiffre (?=.*\\d)
                Au moins un caractère spécial (?=.*[@#$%^&*()!+=_-])
                Longueur de 8 à 30 caractères ({8,30}) 
                */
				}),
		});

		const { error } = validationSchema.validate(data, { abortEarly: false });
		return error;
	},
};

export default userController;
