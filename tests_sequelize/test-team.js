import { Team } from "../src/models/associations.js";

// * === CRUD DE LA TABLE team ===

// *** CREATE ***

// 1 - Création d'une nouvelle entrée dans la table team
async function createTeam() {
  try {
    const newTeam = await Team.create({
      name: "Barça",
      country: "Espagne",
      city: "Barcelone",
      logo: "toto",
    });
    console.log(JSON.stringify(newTeam, null, 2));
  } catch (error) {
    console.error("Ouuuppppps, ya comme un hic!", error.message);
  }
}
// createTeam();

// *** DELETE ***

// 2 - Suppression de l'entrée dans la table team

async function deleteTeam() {
  try {
    const teamDelete = await Team.destroy({
      where: {
        name: "Barça",
      },
    });
    // On affiche le résultat
    console.log(JSON.stringify(teamDelete, null, 2));
  } catch (error) {
    console.error("Ouuuppppps, ya comme un hic!", error.message);
  }
}

// deleteTeam()

// *** UPDATE ***

// 3 - Modification d'un niveau en base de prediction

async function updateTeam() {
  try {
    const teamUpdate = await Team.update(
      {
        name: "rc lens",
        logo: "rcl_logo.png",
      },
      {
        where: {
          name: "toto",
          logo: "barça_logo.png",
        },
      }
    );
    console.log(JSON.stringify(teamUpdate, null, 2));
    // On affiche le résultat
  } catch (error) {
    console.error("Ouuuppppps, ya comme un hic!", error.message);
  }
}

// updateTeam();
