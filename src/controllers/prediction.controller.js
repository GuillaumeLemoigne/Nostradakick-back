import { Prediction } from "../models/associations.js";
import Joi from "joi";

const predictionController = {
  validate(req, method) {
    let schema = Joi.object({

      score_predi_home: Joi.number().integer().min(1).max(2).messages({
        "number.base": "le score doit être un nombre",
        "number.integer": "le score doit être un nombre entier",
        "number.min": "le score doit contenir au moins {#limit} chiffre",
        "number.max": "le score doit contenir au maximum {#limit} chiffre"
      }),

      score_predi_away: Joi.number().integer().min(1).max(2).message({
        "number.base": "le score doit être un nombre",
        "number.integer": "le score doit être un nombre entier",
        "number.min": "le score doit contenir au moins {#limit} chiffre",
        "number.max": "le score doit contenir au maximum {#limit} chiffre"
      }),
      points_score: Joi.number().integer().min(1).max(2).messages({
        "number.base": "le score doit être un nombre",
        "number.integer": "le score doit être un nombre entier",
        "number.min": "le score doit contenir au moins {#limit} chiffre",
        "number.max": "le score doit contenir au maximum {#limit} chiffre"
      }),
      points_outcome: Joi.number().integer().min(1).max(2).messages({
        "number.base": "le score doit être un nombre",
        "number.integer": "le score doit être un nombre entier",
        "number.min": "le score doit contenir au moins {#limit} chiffre",
        "number.max": "le score doit contenir au maximum {#limit} chiffre"
      }),
    });
  },

  // Méthode pour récupérer tous les pronostics
  getAllPredictions: async (req, res) => {
    try {
      const allPredictions = await Prediction.findAll({
        include: [
          {
            association: "user",
          },
          {
            association: "match",
            include: [
              {
                association: "team",
                through: {
                  attributes: [],
                },
              },
            ],
          },
        ],
      });
      console.log(JSON.stringify(allPredictions, null, 2));
      return res.status(200).json(allPredictions);
    } catch (error) {
      console.error(error.message);
    }
  },

  getOnePrediction: async (req, res) => {
    try {
      const { id } = req.params; //
      const onePrediction = await Prediction.findOne({
        where: {
          prediction_id: id,
        },
      });

      if (onePrediction) {
        return res.status(200).json(onePrediction);
      } else {
        res.status(404).json({ message: "Prediction not found" });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  createOnePrediction: async (req, res) => {
    try {
      const createPrediction = await Prediction.create(req.body);
      if (createPrediction) {
        return res.status(201).json(createPrediction);
      } else {
        return res.status(404).json({ message: "Prediction not created" });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  patchOnePrediction: async (req, res) => {
    try {
      const patchPrediction = await Prediction.findByPk(req.params.id);
      if (!patchPrediction) {
        return res.status(404).json({ message: "Vous n'avez rien modifié" });
      }
      const { score_predi_home, score_predi_away } = req.body;

      if (!score_predi_away && !score_predi_home) {
        return res
          .status(404)
          .json({ message: "Seuls les scores peuvent être modifiés" });
        console.log("coucou remplis moi!");
      }
      if (score_predi_home !== undefined) {
        patchPrediction.score_predi_home = score_predi_home;
      }
      if (score_predi_away !== undefined) {
        patchPrediction.score_predi_away = score_predi_away;
      }
      await patchPrediction.save();

      return res.status(200).json(patchPrediction);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteOnePrediction: async (req, res) => {
    try {
      const { id } = req.params;
      const deletePrediction = await Prediction.destroy({
        where: {
          prediction_id: id,
        },
      });
      if (deletePrediction) {
        return res.status(200).json(deletePrediction);
      } else {
        return res.status(404).json({ message: "Prediction not found" });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default predictionController;
