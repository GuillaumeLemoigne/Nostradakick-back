import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Match extends Model {}

Match.init(
	{
		match_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},

		competition_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		// Date au format ISO 8601:
		// YYYY-MM-DDTHH:mm:ss.sssZ
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},

		stadium: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		score_home: {
			type: DataTypes.INTEGER,
		},

		score_away: {
			type: DataTypes.INTEGER,
		},

		outcome: {
			type: DataTypes.STRING,
			// Empêche les autres valeurs autres que "home", "away" et "neutral"
			validate: {
				isIn: [['home', 'away', 'neutral']], 
			}
		},
	},
	{
		sequelize,
		tableName: "match",
	},
);

export { Match };
