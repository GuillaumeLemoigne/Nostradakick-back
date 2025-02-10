import { sequelize } from "../sequelize.js";
import { Model, DataTypes } from "sequelize";

class Competition extends Model { }

Competition.init(
	{
		competition_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		  },

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
