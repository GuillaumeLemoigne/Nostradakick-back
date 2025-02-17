import { User } from "../models/associations.js";
import Joi from "joi";
import argon2 from "argon2";

const userController = {
	getAllUsers: async (req, res, next) => {
		try {
			// Récupération de tous les Users avec les prédictions
			const allUsers = await User.findAll({
				include: [
					{
						association: "prediction",
					},
				],
			});

			if (!allUsers) return next();

			return res.status(200).json(allUsers);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getTheUser: async (req, res, next) => {
		try {
			//
			const { id } = req.params;
			// Récupération du User avec les prédictions
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
			error.status = 500;
			return next(error);
		}
	},

	createOneUser: async (req, res, next) => {
		try {
			//* Validation des inputs avec JOI *//
			const error = userController.validate(req.body);
			if (error) {
				return res.status(400).json({ message: error.details });
			}

			// Hash mot de passe
			const hashedPassword = await argon2.hash(req.body.password);

			// Création du User
			const createUser = await User.create({
				...req.body,
				password: hashedPassword,
			});
			if (!createUser) {
				return next();
			}
			res.status(201).json(createUser);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	patchOneUser: async (req, res, next) => {
		try {
			// Récupération du User a modifier
			const patchUser = await User.findByPk(11);
			if (!patchUser) {
				return res.status(404).json({ message: "This User doesn't exist" });
			}
			// Déstructuration de req.body
			const { first_name, last_name, pseudo, email, password } = req.body;

			// Validation JOI
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
			error.status = 500;
			return next(error);
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
			error.status = 500;
			return next(error);
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
				.min(8)
				.message("Le mot de passe doit contenir au moins 8 caractères.")
				.max(32)
				.message("Le mot de passe ne doit pas dépasser 32 caractères.")
				.pattern(new RegExp("(?=.*[A-Z])"))
				.message("Le mot de passe doit contenir au moins une majuscule.")
				.pattern(new RegExp("(?=.*[a-z])"))
				.message("Le mot de passe doit contenir au moins une minuscule.")
				.pattern(new RegExp("(?=.*\\d)"))
				.message("Le mot de passe doit contenir au moins un chiffre.")
				.pattern(new RegExp("(?=.*[@$!%*?&])"))
				.message(
					"Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&).",
				)
				.required(),

			/* 
                Au moins une minuscule (?=.*[a-z])
                Au moins une majuscule (?=.*[A-Z])
                Au moins un chiffre (?=.*\\d)
                Au moins un caractère spécial (?=.*[@#$%^&*()!+=_-])
                Longueur de 8 à 30 caractères ({8,30}) 
                */
		});

		const { error } = validationSchema.validate(data, { abortEarly: false });
		return error;
	},
};

export default userController;
