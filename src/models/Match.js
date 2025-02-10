import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Match extends Model {}

Match.init(
	{
		competition_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
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
			allowNull: false,
		},

		score_away: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

		outcome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "match",
	},
);

export { Match };
