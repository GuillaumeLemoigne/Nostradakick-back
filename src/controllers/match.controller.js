import { Match } from "../models/associations.js";

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
};

export default matchController;
