import { Prediction } from "../models/associations.js";
import Joi from "joi";

const predictionController = {
	// Schéma JOI pour validation des données envoyé par les inputs
	validate(data) {
		const schema = Joi.object({
			score_predi_home: Joi.number()
				.integer()
				.min(0)
				.max(99)
				.required()
				.messages({
					"number.base": "le score doit être un nombre",
					"number.integer": "le score doit être un nombre entier",
					"number.min": "le score doit être au minimum {#limit}",
					"number.max": "le score ne peut pas dépasser {#limit}",
				}),

			score_predi_away: Joi.number()
				.integer()
				.min(0)
				.max(99)
				.required()
				.messages({
					"number.base": "le score doit être un nombre",
					"number.integer": "le score doit être un nombre entier",
					"number.min": "le score doit être au minimum {#limit}",
					"number.max": "le score ne peut pas dépasser {#limit}",
				}),
			points_score: Joi.number().integer().min(0).max(50).messages({
				"number.base": "le score doit être un nombre",
				"number.integer": "le score doit être un nombre entier",
				"number.min": "le score doit contenir au moins {#limit} chiffre",
				"number.max": "le score doit contenir au maximum {#limit} chiffre",
			}),
			points_outcome: Joi.number().integer().min(0).max(10).messages({
				"number.base": "le score doit être un nombre",
				"number.integer": "le score doit être un nombre entier",
				"number.min": "le score doit contenir au moins {#limit} chiffre",
				"number.max": "le score doit contenir au maximum {#limit} chiffre",
			}),
			match_id: Joi.number().integer().required().messages({
				"number.base": "match_id doit être un nombre",
				"any.required": "match_id est requis",
			}),
			prediction_id: Joi.number().integer().messages({
				"number.base": "match_id doit être un nombre",
				"any.required": "match_id est requis",
			}),
		});

		const { error } = schema.validate(data, { abortEarly: false });
		return error;
	},

	// Méthode pour récupérer tous les pronostics
	getAllPredictions: async (req, res, next) => {
		try {
			// Récupération de tous les pronostique avec les matchs et les teams
			const allPredictions = await Prediction.findAll({
				include: [
					{
						association: "user",
					},
					{
						association: "match",
						include: [
							{
								association: "team",
								through: {
									attributes: [],
								},
							},
						],
					},
				],
			});
			// Vérification de allPredictions
			if (!allPredictions) {
				return next();
			}

			// Retour de toutes les prédictions
			return res.status(200).json(allPredictions);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getOnePrediction: async (req, res, next) => {
		try {
			// Déstructuration de req.body
			const { id } = req.params;

			// Récupération de une prédiction
			const onePrediction = await Prediction.findOne({
				where: {
					prediction_id: id,
				},
			});

			// Vérification que la prédiction existe
			if (!onePrediction) {
				return next();
			}

			// Retour de la réponse avec la prédiction
			return res.status(200).json(onePrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	createOnePrediction: async (req, res, next) => {
		try {
			console.log("je crée une prédiction");

			// Validation des inputs avec JOI
			const error = predictionController.validate(req.body);

			// Vérification si erreur JOI
			if (error) {
				console.log("j'ai une erreur dans JOI");

				return next(error);
			}

			const predict = {
				user_id: req.user.user_id,
				...req.body,
			};

			// Création d'une prédiction
			const createPrediction = await Prediction.create(predict);
			console.log(createPrediction);

			// Vérification que la prédiction ai bien été crée
			if (!createPrediction) {
				return next();
			}
			// Retour de la réponse avec la prédiction crée
			return res.status(201).json(createPrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	patchOnePrediction: async (req, res, next) => {
		try {
			// Récupération de la prédiction a modifier
			const patchPrediction = await Prediction.findByPk(req.params.id);
			console.log(JSON.stringify(patchPrediction, null, 2));

			// Vérification de la prédiction
			if (!patchPrediction) {
				return next();
			}

			// Destructuration de req.body
			const {
				score_predi_home,
				score_predi_away,
				points_score,
				points_outcome,
			} = req.body;

			console.log(req.body);

			// Validation des inputs dans JOI
			const error = predictionController.validate(req.body);

			// Vérification si erreur JOI
			if (error) {
				return next(error);
			}

			// Vérification des données reçu, savoir si elle existe
			if (
				!score_predi_away &&
				!score_predi_home &&
				points_score === undefined &&
				points_outcome === undefined
			) {
				const error = new Error("Mauvaise requête");
				error.status = 400;
				return next(error);
			}

			// Modification de la valeur score_predi_home
			if (score_predi_home !== undefined) {
				patchPrediction.score_predi_home = score_predi_home;
			}

			// Modification de la valeur score_predi_away
			if (score_predi_away !== undefined) {
				patchPrediction.score_predi_away = score_predi_away;
			}
			// Modification de la valeur score_predi_home
			if (points_score !== undefined) {
				console.log(points_score);
				patchPrediction.points_score = points_score;
			}

			// Modification de la valeur score_predi_away
			if (points_outcome !== undefined) {
				console.log(points_outcome);
				patchPrediction.points_outcome = points_outcome;
			}

			// Enregistrement en BDD
			await patchPrediction.save();

			console.log(JSON.stringify(patchPrediction, 2, null));
			// Retour de la réponse avec la prédiction modifié
			return res.status(201).json(patchPrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	deleteOnePrediction: async (req, res, next) => {
		try {
			// Récupération de l'id de la prédiction dans la request
			const PredictionId = req.params.id;

			// Suppression du user
			const deletePrediction = await Prediction.destroy({
				where: {
					prediction_id: PredictionId,
				},
			});

			// Retour de la réponse et d'un message pour confirmer la suppression
			return res
				.status(202)
				.json({ message: "La prédiction a bien été supprimée !" });
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},
};

export default predictionController;
