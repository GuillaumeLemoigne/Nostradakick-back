import { Op } from "sequelize";
import { Match } from "../models/associations.js";

const currentDate = new Date();

const matchController = {
	getAllMatch: async (req, res, next) => {
		try {
			// Récupération de tous les matchs
			const response = await Match.findAll({
				include: [
					{
						association: "team",
						through: {
							attributes: [],
						},
					},
				],
			});

			// Vérification de la réponse
			if (!response) {
				return next();
			}
			// Renvoi de la réponse au client
			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getEndedMatch: async (req, res, next) => {
		try {
			// Récupération des matchs qui ont déjà eu lieu
			const response = await Match.findAll({
				where: {
					date: {
						[Op.lt]: currentDate,
					},
				},
				include: [
					{
						association: "team",
						through: {
							attributes: [],
						},
					},
				],
			});

			// Vérification de la réponse
			if (!response) {
				return next();
			}
			// Renvoi de la réponse au client
			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getUpcomingMatch: async (req, res, next) => {
		try {
			// Récupération des matchs qui n'ont pas encore eu lieu
			const response = await Match.findAll({
				where: {
					date: {
						[Op.gt]: currentDate,
					},
				},
				include: [
					{
						association: "team",
						through: {
							attributes: [],
						},
					},
				],
			});

			// Vérification de la réponse
			if (!response) {
				return next();
			}

			// Renvoi de la réponse au client
			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getUpcomingMatchPredictions: async (req, res, next) => {
		try {
			// Récupération des matchs qui n'ont pas encore eu lieu
			const response = await Match.findAll({
				where: {
					date: {
						[Op.gt]: currentDate,
					},
				},
				include: [
					{
						association: "team",
						through: {
							attributes: [],
						},
					}, 
					{
						association: "prediction",
						// condition à vérifier avec le "authHandler"
						where: {
							user_id: req.user.user_id,
						},
						required: false
					}
				],
			});

			// Vérification de la réponse
			if (!response) {
				return next();
			}

			// Renvoi de la réponse au client
			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},
};

export default matchController;
