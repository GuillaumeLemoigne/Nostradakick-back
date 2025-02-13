import { Op } from "sequelize";
import { Match } from "../models/associations.js";

const currentDate = new Date();

const matchController = {
	getAllMatch: async (req, res) => {
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

			return res.status(200).json(response);
		} catch (error) {
			console.error(error);
		}
	},

	getEndedMatch: async (req, res) => {
		try {
			const response = await Match.findAll({
				where: {
					date: {
						[Op.lt]: currentDate,
					}
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

			return res.status(200).json(response);
		} catch (error) {
			console.error(error);
		}
	},

	getUpcomingMatch: async (req, res) => {
		try {
			const response = await Match.findAll({
				where: {
					date: {
						[Op.gt]: currentDate,
					}
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

			return res.status(200).json(response);
		} catch (error) {
			console.error(error);
		}
	},
};

export default matchController;
