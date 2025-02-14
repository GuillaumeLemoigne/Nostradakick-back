import { Match } from "../models/associations.js";
import { Prediction } from "../models/associations.js";
import { User } from "../models/associations.js";
import Joi from "joi";
import { Op } from "sequelize";

// Ce contôleur permet de récupérer toutes les données nécessaires à l'affichage de la page d'accueil
const mainController = {

    // Méthode permettant d'afficher tous les matchs à venir
    getUpcomingMatch: async (req, res) => {
            try {
                const currentDate = new Date();                
                const response = await Match.findAll({
                    where: {
                        date: {
                            [Op.gt]: currentDate,
                        },
                    },
                    include: [
                        {
                            association: "team",
                            through: {
                                attributes: [],
                            },
                        },
                        
                    ],
                });
                console.log(JSON.stringify(response, null, 2));
                
                return res.status(200).json(response);
            } catch (error) {
                console.error(error);
            }
        },




    // Schéma de validation nécessaire au bon fonctionnement de la méthode "patchPoints" 
    // utilisée pour mettre à jour le nombre de points gagnés lors d'un match
validate(data) {
    const schema = Joi.object({
        score_predi_home: Joi.number().integer().min(0).max(99).required().messages({
            "number.base": "le score doit être un nombre",
            "number.integer": "le score doit être un nombre entier",
            "number.min": "le score doit être au minimum {#limit}",
            "number.max": "le score ne peut pas dépasser {#limit}",
        }),

        score_predi_away: Joi.number().integer().min(0).max(99).required().messages({
            "number.base": "le score doit être un nombre",
            "number.integer": "le score doit être un nombre entier",
            "number.min": "le score doit être au minimum {#limit}",
            "number.max": "le score ne peut pas dépasser {#limit}",
        }),
        points_score: Joi.number().integer().min(0).max(50).messages({
            "number.base": "le score doit être un nombre",
            "number.integer": "le score doit être un nombre entier",
            "number.min": "le score doit contenir au moins {#limit} chiffre",
            "number.max": "le score doit contenir au maximum {#limit} chiffre",
        }),
        points_outcome: Joi.number().integer().min(0).max(10).messages({
            "number.base": "le score doit être un nombre",
            "number.integer": "le score doit être un nombre entier",
            "number.min": "le score doit contenir au moins {#limit} chiffre",
            "number.max": "le score doit contenir au maximum {#limit} chiffre",
        }),
        user_id: Joi.number().integer().required().messages({
            "number.base": "user_id doit être un nombre",
            "any.required": "user_id est requis",
        }),
        match_id: Joi.number().integer().required().messages({
            "number.base": "match_id doit être un nombre",
            "any.required": "match_id est requis",
        }),
    });

    const { error } = schema.validate(data, { abortEarly: false });
    return error;
},

// Méthode permettant de mettre à jour le nombre de points gagnés lors d'une prédiction
patchPoints: async (req, res) => {
    try {
        const patchPoints = await Prediction.findByPk(req.params.id);
        if (!patchPrediction) {
            return res
                .status(404)
                .json({ message: "Cette prédiction n'existe pas" });
        }
        const { points_outcome, points_score } = req.body;
        const updatePoints = { points_outcome, points_score };

        const error = mainController.validate(updatePoints);
        if (error) {
            return res.status(400).json({ message: error.details });
        }

        if (!points_outcome && !points_score) {
            return res.status(400).json({ message: "Mauvaise requête" });
        }
        if (points_outcome !== undefined) {
            patchPoints.points_outcome = points_outcome;
        }
        if (points_score !== undefined) {
            patchPoints.points_score = points_score;
        }
        await patchPoints.save();

        return res.status(201).json(patchPoints);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
},


// Créer méthode pour gérer le classement des utilisateurs 
// (requête Users + Prediction (point outcome et point score)
}

export {mainController};