import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

class User extends Model {}

User.init(
	{
		first_name: {
			type: DataTypes.STRING,
		},

		last_name: {
			type: DataTypes.STRING,
		},

		pseudo: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		password: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize,
		tableName: "user",
	},
);

export { User };
