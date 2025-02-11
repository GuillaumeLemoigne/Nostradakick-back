import { Prediction } from "../models/associations.js";


const predictionController = {
    // Méthode pour récupérer tous les pronostics
    getAllPrediction: async (req, res) => {
        try {
            const allPrediction = await Prediction.findAll({
                include: 
            })
        } catch(error) {
            console.log(error)
    }

    },

    getOnePrediction: async (req, res) => {
        try {
            const onePrediction = await Prediction.findOne({
                where: { id },
                include: 
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export default predictionController;