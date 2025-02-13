import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class Prediction extends Model {}

Prediction.init(
	// lorsqu'une prediction est créée, l'utilisateur s'est loggué (il existe obligatoirement) et le match est déjà en base de donnée (donc il existe aussi obligatoirement)
	{
		prediction_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		  },
		  
		  user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

		match_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},

		score_predi_home: {
			type: DataTypes.INTEGER,
		},

		score_predi_away: {
			type: DataTypes.INTEGER,
		},

		points_score: {
			type: DataTypes.INTEGER,
		},

		points_outcome: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		tableName: "prediction",
	},
);

export { Prediction };
