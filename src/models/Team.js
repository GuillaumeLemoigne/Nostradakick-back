import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Team extends Model {}

Team.init(
	{
		team_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		  },

		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		country: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		logo: DataTypes.TEXT,
	},
	{
		sequelize,
		tableName: "team",
	},
);

export { Team };
