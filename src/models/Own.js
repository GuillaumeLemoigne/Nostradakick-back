import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Own extends Model {}

Own.init(
	{
		own_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		  },
		competition_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

		team_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "own",
		indexes: [
			{
				unique: true,
				fields: ["competition_id", "team_id"],
			},
		],
	},
);

export { Own };
