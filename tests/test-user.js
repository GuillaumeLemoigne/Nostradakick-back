import { User } from "../src/models/User.js"


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
            password: 'toto'
         });
         console.log(json.stringify(createUser, null, 2));
         
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!")
    }
};
createUser();