import {User} from "../src/models/associations.js"


// * === CRUD DE LA TABLE competition ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table competition
async function createUser () {
    try {
        const newUser = await User.create({ 
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
// createUser();

// *** DELETE ***

// 2 - Suppression de l'entrée dans la table competition

async function deleteUser () {
    try {
        const userDelete = await User.destroy(
            {
                where: {
                    first_name: "jojo",
                },
            }
        );
        // On affiche le résultat
        console.log(JSON.stringify(userDelete, null, 2));
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!",error.message)
    }
};

// deleteUser()


