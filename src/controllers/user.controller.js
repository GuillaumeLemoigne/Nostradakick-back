import { User } from "../models/associations.js";
import Joi from "joi";
import argon2 from "argon2";

const userController = {
	getAllUsers: async (req, res, next) => {
		try {
			// Récupération de tous les Users avec les prédictions
			const allUsers = await User.findAll({
				attributes: ["pseudo", "picture"],
				include: [
					{ 
						association: "prediction",
					},
				],
			});

			// Vérification de l'existence des données
			if (!allUsers) return next();

			// Retour de la réponse avec les données
			return res.status(200).json(allUsers);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getTheUser: async (req, res, next) => {
		try {
			
			// Récupération de l'ID
			// const { id } = req.params;
			// Récupération du User avec les prédictions
			const user = await User.findOne({
				where: {
					user_id: req.user.user_id,
				},
				include: [
					{
						association: "prediction",
					},
				],
			});
			console.log('etape4', user.toJSON());

			// Vérification de l'existance du user
			if (!user) return next();

			// Retour de la réponse avec le user
			return res.status(200).json(user);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	createOneUser: async (req, res, next) => {
		try {
			//* Validation des inputs avec JOI *//
			const error = userController.validate(req.body);
			// Gestion de l'erreur JOI
			if (error) {
				const erreur = new Error(error.details);
				erreur.status = 400;
				return next(erreur);
			}

			// Hash mot de passe
			const hashedPassword = await argon2.hash(req.body.password);

			// Création du User
			const createUser = await User.create({
				...req.body, // Le reste de l'objet req.body
				password: hashedPassword,
			});

			// Vrification de l'existance du nouveau user
			if (!createUser) return next();

			// Retour de la réponse avec le nouveau user
			res.status(201).json(createUser);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	patchOneUser: async (req, res, next) => {
		try {
			// Récupération du User a modifier
			const patchUser = await User.findByPk(req.user.user_id);
			if (!patchUser) {
				return next();
			}
			// Déstructuration de req.body
			const { first_name, last_name, pseudo, email, password } = req.body;

			// Validation JOI
			const error = userController.validate(req.body);
			// Gestion erreur JOI
			if (error) {
				const erreur = new Error(error.details);
				erreur.status = 400;
				return next(erreur);
			}

			// Vérification si il y a au moins un champ a modifié
			if (!first_name && !last_name && !pseudo && !email && !password) {
				const erreur = new Error("Bad request");
				erreur.status = 400;
				return next(erreur);
			}

			// Modification du pseudo
			if (pseudo !== undefined) {
				patchUser.pseudo = pseudo;
			}
			// Modification du email
			if (email !== undefined) {
				patchUser.email = email;
			}
			// Modification du password
			if (password !== undefined) {
				const hashedPassword = await argon2.hash(password);
				patchUser.password = hashedPassword;
			}

			// Enregistrement dans la BDD
			await patchUser.save();

			// Retour de la réponse avec la modification du User
			return res.status(201).json(patchUser);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	deleteOneUser: async (req, res, next) => {
		try {
			const deleteUser = await User.destroy({
				where: {
					user_id: req.user.user_id,
				},
			});
	
			return res.status(202).json({ 
				message: "L'utilisateur a bien été supprimé !" 
			});
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
				.pattern(new RegExp("(?=.*[A-Z])")) // Au moins une minuscule (?=.*[a-z])
				.message("Le mot de passe doit contenir au moins une majuscule.")
				.pattern(new RegExp("(?=.*[a-z])")) // Au moins une majuscule (?=.*[A-Z])
				.message("Le mot de passe doit contenir au moins une minuscule.")
				.pattern(new RegExp("(?=.*\\d)")) // Au moins un chiffre (?=.*\\d)
				.message("Le mot de passe doit contenir au moins un chiffre.")
				.pattern(new RegExp("(?=.*[@$!%*?&])")) // Au moins un caractère spécial (?=.*[@#$%^&*()!+=_-])
				.message(
					"Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&).",
				)
				.required(),
		});

		const { error } = validationSchema.validate(data, { abortEarly: false });
		return error;
	},
};

export default userController;
