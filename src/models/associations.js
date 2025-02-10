import { sequelize } from "../sequelize.js";
import { Competition } from "./Competition.js";
import { Team } from "./Team.js";
import { Match } from "./Match.js";
import { User } from "./User.js";
import { Prediction } from "./Prediction.js";
import { Play } from "./Play.js";
import { Own } from "./Own.js";

Competition.hasMany(Match, {
	as: "match",
	foreignKey: "competition_id",
});

Match.hasOne(Competition, {
	as: "competition",
});

Competition.belongsToMany(Team, {
	as: "team",
	through: Own,
	foreignKey: "competition_id",
	otherKey: "team_id",
});

Team.belongsToMany(Competition, {
	as: "competition",
	through: Own,
	foreignKey: "team_id",
	otherKey: "competition_id",
});

Team.belongsToMany(Match, {
	as: "match",
	through: Play,
	foreignKey: "match_id",
	otherKey: "team_id",
});

Match.belongsToMany(Team, {
	as: "team",
	through: Play,
	foreignKey: "team_id",
	otherKey: "match_id",
});

User.hasMany(Prediction, {
	as: "prediction",
	foreignKey: "user_id",
});

Prediction.hasOne(User, {
	as: "user",
});

Prediction.hasOne(Match, {
	as: "match",
});

Match.hasMany(Prediction, {
	as: "prediction",
	foreignKey: "match_id",
});

export { Competition, Team, Match, User, Prediction };
