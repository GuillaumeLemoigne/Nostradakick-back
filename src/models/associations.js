import { sequelize } from "../sequelize.js";
import { Competition } from "./Competition.js";
import { Team } from "./Team.js";
import { Match } from "./Match.js";
import { Player } from "./Player.js";
import { Prediction } from "./Prediction.js";
import { Play } from "./Play.js";
import { Own } from "./Own.js";

Competition.hasMany(Match, {
	as: "match",
	foreignKey: "competition_id",
});

Match.belongsTo(Competition, {
	as: "competition",
	foreignKey: "competition_id",
});

Competition.belongsToMany(Team, {
	as: "team",
	through: "Own",
	foreignKey: "competition_id",
	otherKey: "team_id",
});

Team.belongsToMany(Competition, {
	as: "competition",
	through: "Own",
	foreignKey: "team_id",
	otherKey: "competition_id",
});

Team.belongsToMany(Match, {
	as: "match",
	through: "Play",
	foreignKey: "team_id",
	otherKey: "match_id",
});

Match.belongsToMany(Team, {
	as: "team",
	through: "Play",
	foreignKey: "match_id",
	otherKey: "team_id",
});

Player.hasMany(Prediction, {
	as: "prediction",
	foreignKey: "player_id",
});

Prediction.belongsTo(Player, {
	as: "player",
	foreignKey: "player_id",
});

Prediction.belongsTo(Match, {
	as: "match",
	foreignKey: "match_id",
});

Match.hasMany(Prediction, {
	as: "prediction",
	foreignKey: "match_id",
});

export { Competition, Team, Match, Player, Prediction };
