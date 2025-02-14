import { Prediction } from "../src/models/associations.js";

// * === CRUD DE LA TABLE prediction ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table prediction
async function createPrediction() {
  try {
    const newPrediction = await Prediction.create({
      score_predi_home: "1",
      score_predi_away: "0",
      points_score: "3",
      points_outcome: "10",
    });
    console.log(JSON.stringify(newPrediction, null, 2));
  } catch (error) {
    error.status = 500;
    return next(error)
  }
}
// createPrediction();

// *** DELETE ***

// 2 - Suppression de l'entrée dans la table prediction

async function deletePrediction() {
  try {
    const predictionDelete = await Prediction.destroy({
      where: {
        user_id: "2",
      },
    });
    // On affiche le résultat
    console.log(JSON.stringify(predictionDelete, null, 2));
  } catch (error) {
    console.error("Ouuuppppps, ya comme un hic!", error.message);
  }
}

/* deletePrediction() */

// *** UPDATE ***

// 3 - Modification d'un niveau en base de prediction

async function updatePrediction() {
  try {
    const predictionUpdate = await Prediction.update(
      {        
            score_predi_home:"2",
            score_predi_away:"0"
      },
      {
        where: {
          user_id: "2",
          match_id: "1",
          
        },
      }
    );
    console.log(JSON.stringify(predictionUpdate, null, 2));
    // On affiche le résultat
  } catch (error) {
    console.error("Ouuuppppps, ya comme un hic!", error.message);
  }
}

// updatePrediction();
