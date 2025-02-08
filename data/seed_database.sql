-- ✅ INSERT AVEC COMMIT
BEGIN;

INSERT INTO "competition"
("name","season","logo")
VALUES
('Ligue 1', '2024-2025', 'ligue1_logo.png');

COMMIT; -- ✅ On valide la compétition avant de créer les matchs

BEGIN;

INSERT INTO "team"
("name","country","city","logo")
VALUES
('Paris Saint-Germain', 'France', 'Paris', 'psg_logo.png'),
('Olympique de Marseille', 'France', 'Marseille', 'om_logo.png'),
('AS Monaco', 'France', 'Monaco', 'asm_logo.png'),
('LOSC Lille', 'France', 'Lille', 'losc_logo.png'),
('OGC Nice', 'France', 'Nice', 'ogcn_logo.png'),
('RC Lens', 'France', 'Lens', 'rcl_logo.png');

COMMIT; -- ✅ On valide les équipes

BEGIN;

INSERT INTO "match"
("competition_id","date","stadium","score_home","score_away","outcome")
VALUES
((SELECT "competition_id" FROM "competition" WHERE "name" = 'Ligue 1'), '2025-02-10 15:00:00+02', 'Parc des Princes', 3, 1, 'Home Win'),
((SELECT "competition_id" FROM "competition" WHERE "name" = 'Ligue 1'), '2025-02-11 16:00:00+02', 'Stade Vélodrome', 2, 2, 'Draw');

COMMIT; -- ✅ On valide les matchs

BEGIN;

INSERT INTO "user"
("first_name","last_name","pseudo","email","password")
VALUES
('Fabien','LE Goat','Fabio','fabien.legoat@nostra.com','nostra'),
('Abdel','LE Coatch','Zizou','abdel.lecoatch@nostra.com','nostra');

COMMIT;

-- ✅ INSERT PREDICTIONS AVEC SOUS-REQUÊTES
BEGIN;

INSERT INTO "prediction"
("user_id","match_id","score_predi_home","score_predi_away","points_score","points_outcome")
VALUES
((SELECT "user_id" FROM "user" WHERE "pseudo" = 'Fabio'),
 (SELECT "match_id" FROM "match" WHERE "stadium" = 'Parc des Princes' AND "date" = '2025-02-10 15:00:00+02'),
 3, 1, 3, 3);

COMMIT;

-- ✅ TABLE `play` POUR MATCHS ET ÉQUIPES
BEGIN;

INSERT INTO "play"
("match_id","team_id","role")
VALUES
((SELECT "match_id" FROM "match" WHERE "stadium" = 'Parc des Princes'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'Paris Saint-Germain'), 'home'),
((SELECT "match_id" FROM "match" WHERE "stadium" = 'Parc des Princes'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'Olympique de Marseille'), 'away');

COMMIT;

-- ✅ TABLE `own` POUR COMPÉTITIONS ET ÉQUIPES
BEGIN;

INSERT INTO "own"
("competition_id","team_id")
VALUES
((SELECT "competition_id" FROM "competition" WHERE "name" = 'Ligue 1'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'Paris Saint-Germain'));

COMMIT;