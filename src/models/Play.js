import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Play extends Model {}

Play.init(
	{
		play_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		  },
		match_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		team_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		role: {
			type: DataTypes.STRING,
			// Empêche les autres valeurs autres que "home" et "away"
			validate: {
				isIn: [['home', 'away']], 
			}
		},
	},
	{
		sequelize,
		tableName: "play",
		indexes: [
			{
				unique: true,
				fields: ["match_id", "team_id"],
			},
		],
	},
);

export { Play };
