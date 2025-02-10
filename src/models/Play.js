import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Play extends Model {}

Play.init(
	{
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
			allowNull: false,
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
