import { Prediction } from "../models/associations.js";
import Joi from "joi";

const predictionController = {
	// Schéma JOI pour validation des données envoyé par les inputs
	validate(data) {
		const schema = Joi.object({
			score_predi_home: Joi.number().integer().min(0).max(99).required().messages({
				"number.base": "le score doit être un nombre",
				"number.integer": "le score doit être un nombre entier",
				"number.min": "le score doit être au minimum {#limit}",
				"number.max": "le score ne peut pas dépasser {#limit}",
			}),

			score_predi_away: Joi.number().integer().min(0).max(99).required().messages({
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
			user_id: Joi.number().integer().required().messages({
				"number.base": "user_id doit être un nombre",
				"any.required": "user_id est requis",
			}),
			match_id: Joi.number().integer().required().messages({
				"number.base": "match_id doit être un nombre",
				"any.required": "match_id est requis",
			}),
		});

		const { error } = schema.validate(data, { abortEarly: false });
		return error;
	},

	// Méthode pour récupérer tous les pronostics
	getAllPredictions: async (req, res) => {
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

			if (!allPredictions) {
				return next();
			}
			return res.status(200).json(allPredictions);
			
		} catch (error) {
			console.error(error.message);
			
			
		}
	},

	getOnePrediction: async (req, res, next) => {
		try {
			const { id } = req.params; //
			const onePrediction = await Prediction.findOne({
				where: {
					prediction_id: id,
				},
			});

			if (!onePrediction) {
				return next();
			}
			return res.status(200).json(onePrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	createOnePrediction: async (req, res, next) => {
		try {
			const error = predictionController.validate(req.body);
			if (error) {
				return next(error);
			}
			const createPrediction = await Prediction.create(req.body);
			if (!createPrediction) {
				return next();
			}
			return res.status(201).json(createPrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	patchOnePrediction: async (req, res, next) => {
		try {
			const patchPrediction = await Prediction.findByPk(req.params.id);
			if (!patchPrediction) {
				return res
					.status(404)
					.json({ message: "Cette prédiction n'existe pas" });
			}
			const { score_predi_home, score_predi_away } = req.body;
			const updateData = { score_predi_home, score_predi_away };

			const error = predictionController.validate(updateData);
			if (error) {
				return next(error);
			}

			if (!score_predi_away && !score_predi_home) {
				return res.status(400).json({ message: "Mauvaise requête" });
			}
			if (score_predi_home !== undefined) {
				patchPrediction.score_predi_home = score_predi_home;
			}
			if (score_predi_away !== undefined) {
				patchPrediction.score_predi_away = score_predi_away;
			}
			await patchPrediction.save();

			return res.status(201).json(patchPrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	deleteOnePrediction: async (req, res, next) => {
		try {
			const { id } = req.params;
			const deletePrediction = await Prediction.destroy({
				where: {
					prediction_id: id,
				},
			});
			if (!deletePrediction) {
				return next();
			}
			return res.status(202).json(deletePrediction);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},
};

export default predictionController;
