import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Competition extends Model {}

Competition.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		season: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// !!!! il serait intéressant en BDD d'ajouter un "NOT NULL" car créer une competition sans logo ==rendu super moche!!!!
		logo: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "competition",
	},
);

export { Competition };
