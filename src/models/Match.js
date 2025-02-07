import { Model, DataTypes } from 'sequelize';
import sequelize from "../sequelize.js";

class Match extends Model {}

Match.init (
    {
        competition_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        date : {
            type : DataTypes.DATE,
            
        },

        stadium : {
            type : DataTypes.VARCHAR,
        },

        score_home : {
            type : Da
        }


    }


)

export { Match };