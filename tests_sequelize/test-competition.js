import { Competition } from "../src/models/associations.js"


// * === CRUD DE LA TABLE competition ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table competition
async function createCompetition() {
    try {
        const newCompetition = await Competition.create({
            name: "ligue 5",
            season: "2025",
            logo: "waw"
        });
        console.log(JSON.stringify(newCompetition, null, 2));

    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!", error.message);
    }
};
// createCompetition();


// *** READ ***

// 2 - Récupération de toutes les entrées de la table compétition

async function getAllCompetitions() {
    try {
        const competitions = await Competition.findAll();
        console.log(JSON.stringify(competitions, null, 2));
        // JSON.stringify permet de récupérer le résultat
        // au format "string" afin de pouvoir le lire correctement
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!", error.message)
    }
};
// getAllCompetitions();



// 3 - Récupération d'une seule entrée de la table compétition
async function getOneCompetition() {
    try {
        const competition = await Competition.findOne({
            where: {
                name: "ligue 1",
            }
        });
        console.log(JSON.stringify(competition, null, 2));
        // JSON.stringify permet de récupérer le résultat
        // au format "string" afin de pouvoir le lire correctement
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!", error.message)
    }
};
// getOneCompetition();


// *** UPDATE ***

// 4 - Modification d'un niveau en base de données

async function updateCompetition() {
    try {
        const competitionUpdate = await Competition.update(
            {
                name: "ligue 3",
            },
            {
                where: {
                    name: "ligue 2",
                },
            }
        );
        console.log(JSON.stringify(competitionUpdate, null, 2));
        // On affiche le résultat
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!", error.message)
    }
};

//updateCompetition()



// *** DELETE ***

// 5 - Supprimer un niveau en base de données

async function deleteCompetition() {
    try {
        const competitionDelete = await Competition.destroy(
            {
                where: {
                    name: "ligue 4",
                },
            }
        );
        // On affiche le résultat
        console.log(JSON.stringify(competitionDelete, null, 2));
    } catch (error) {
        console.error("Ouuuppppps, ya comme un hic!", error.message)
    }
};

// deleteCompetition()