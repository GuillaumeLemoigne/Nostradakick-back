import { Prediction } from "../models/associations.js";

const predictionController = {
  // Méthode pour récupérer tous les pronostics
  getAllPredictions: async (req, res) => {
    try {
      const allPredictions = await Prediction.findAll();
      console.log(JSON.stringify(allPredictions, null, 2));
      res.status(200).json(allPredictions);
    } catch (error) {
      console.error(error.message);
    }
  },

  getOnePrediction: async (req, res) => {
    try {
        const {id} = req.params; // 
        const onePrediction = await Prediction.findOne({
            where:  {
                prediction_id: id,
            }
        });

        if (onePrediction) {
            res.status(200).json(onePrediction);
        } else {
            res.status(404).json({ message: 'Prediction not found' });
        }
        } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    createOnePrediction: async (req, res) => {
        try {
            const createPrediction = await Prediction.create(req.body);
            if (createPrediction) {
                res.status(201).json(createPrediction);
            } else {
                res.status(404).json({ message: 'Prediction not created' });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    patchOnePrediction: async (req, res) => {
        try {
            const patchPrediction = await Prediction.findByPk(req.params.id);
            if (!patchPrediction){
                res.status(404).json({ message: 'Prediction not found' });
            } 
            const {score_predi_home, score_predi_away} = req.body;
            
            if (score_predi_away === '' && score_predi_home === '') {
                res.status(404).json({ message: 'Prediction not found' });
                console.log("coucou remplis moi!");
                
            }
            if (score_predi_home) {
                    patchPrediction.score_predi_home = score_predi_home;
                }
            if (score_predi_away) {
                    patchPrediction.score_predi_away = score_predi_away;
                }
                await patchPrediction.save();

                res.status(200).json(patchPrediction);
        } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: 'Internal Server Error' });
        }
                
            
        
    },
    
    deleteOnePrediction: async (req, res) => {
        try {
            const {id} = req.params;
            const deletePrediction = await Prediction.destroy({
                where: {
                    prediction_id: id,
                }
            });
            if (deletePrediction) {
                res.status(200).json(deletePrediction);
            } else {
                res.status(404).json({ message: 'Prediction not found' });
            }
        } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
        }
    },
}



export default predictionController;
