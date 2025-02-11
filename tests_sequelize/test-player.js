import {Player} from "../src/models/associations.js"


// * === CRUD DE LA TABLE competition ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table competition
async function createUser () {
    try {
        const newUser = await Player.create({ 
            first_name: "jojo",
            last_name:"jojo",
            pseudo: "jojo",
            email: "toto",
            password: "toto"
         });
         console.log(JSON.stringify(newUser, null, 2));
         
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!",error.message)
    }
};
createUser();

// *** DELETE ***

// 2 - Suppression de l'entrée dans la table competition

async function deletePlayer () {
    try {
        const playerDelete = await Player.destroy(
            {
                where: {
                    first_name: "jojo",
                },
            }
        );
        // On affiche le résultat
        console.log(JSON.stringify(playerDelete, null, 2));
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!",error.message)
    }
};

// deletePlayer()


