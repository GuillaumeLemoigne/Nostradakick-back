import {Match} from "../src/models/associations.js"


// * === CRUD DE LA TABLE competition ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table match
async function createMatch () {
    try {
        const newMatch = await Match.create({ 
            competition_id: "1",
            date: "2026-11-18T20:30:00Z",
            stadium:"jojo",
         });
         console.log(JSON.stringify(newMatch, null, 2));
         
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!",error.message)
    }
};
// createMatch();

// *** DELETE ***

// 2 - Suppression d'une entrée dans la table match

async function deleteMatch () {
    try {
        const matchDelete = await Match.destroy(
            {
                where: {
                    date: "2026-11-18T20:30:00Z",
                },
            }
        );
        // On affiche le résultat
        console.log(JSON.stringify(matchDelete, null, 2));
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!",error.message)
    }
};

// deleteMatch()