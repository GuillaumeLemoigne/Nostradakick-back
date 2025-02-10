import "dotenv/config";
import { Sequelize } from "sequelize";

// Créer la connexion vers la BDD via Sequelize
const sequelize = new Sequelize(process.env.DB_URL, {
	define: {
		underscored: true,
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
});

export  {sequelize};

