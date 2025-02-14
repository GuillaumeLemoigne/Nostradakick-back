import { Op } from "sequelize";
import { Match } from "../models/associations.js";

const currentDate = new Date();

const matchController = {
	getAllMatch: async (req, res, next) => {
		try {
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
			console.log(JSON.stringify(response, null, 2));

			if (!response) {
				return next();
			}

			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getEndedMatch: async (req, res, next) => {
		try {
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
			console.log(JSON.stringify(response, null, 2));

			if (!response) {
				return next();
			}

			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},

	getUpcomingMatch: async (req, res, next) => {
		try {
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
			console.log(JSON.stringify(response, null, 2));

			if (!response) {
				return next();
			}

			return res.status(200).json(response);
		} catch (error) {
			error.status = 500;
			return next(error);
		}
	},
};

export default matchController;
