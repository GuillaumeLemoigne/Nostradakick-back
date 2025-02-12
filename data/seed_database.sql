-- ✅ INSERT AVEC COMMIT
BEGIN;

INSERT INTO "competition"
("name","season","logo")
VALUES
('ligue 1', '2024-2025', 'ligue1_logo.png');

COMMIT; -- ✅ On valide la compétition avant de créer les matchs

BEGIN;

INSERT INTO "team"
("name","country","city","logo")
VALUES
('paris saint-germain', 'france', 'paris', 'psg_logo.png'),
('olympique de marseille', 'france', 'marseille', 'om_logo.png'),
('as monaco', 'france', 'monaco', 'asm_logo.png'),
('losc lille', 'france', 'lille', 'losc_logo.png'),
('ogc nice', 'france', 'nice', 'ogcn_logo.png'),
('rc lens', 'france', 'lens', 'rcl_logo.png');

COMMIT; -- ✅ On valide les équipes

BEGIN;

INSERT INTO "match"
("competition_id","date","stadium","score_home","score_away","outcome")
VALUES
-- Match 1 : PSG vs OM
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-12 15:00:00+02', 'Parc des Princes', 2, 1, 'home win'),
-- Match 2 : OM vs LOSC Lille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-13 16:00:00+02', 'Stade Vélodrome', 1, 0, 'home win'),
-- Match 3 : AS Monaco vs RC Lens
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-14 17:00:00+02', 'Stade Louis II', 3, 2, 'home win'),
-- Match 4 : LOSC Lille vs RC Lens
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-15 18:00:00+02', 'Stade Pierre-Mauroy', 1, 1, 'neutral'),
-- Match 5 : OGC Nice vs LOSC Lille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-16 19:00:00+02', 'Allianz Riviera', 0, 2, 'away win'),
-- Match 6 : RC Lens vs Olympique de Marseille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-17 15:00:00+02', 'Stade Bollaert-Delelis', 2, 0, 'home win'),
-- Match 7 : PSG vs AS Monaco
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-18 16:00:00+02', 'Parc des Princes', 3, 1, 'home win'),
-- Match 8 : Olympique de Marseille vs OGC Nice
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-19 17:00:00+02', 'Stade Vélodrome', 2, 2, 'neutral'),
-- Match 9 : AS Monaco vs OGC Nice
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-20 18:00:00+02', 'Stade Louis II', 1, 3, 'away win'),
-- Match 10 : LOSC Lille vs PSG
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-21 19:00:00+02', 'Stade Pierre-Mauroy', 0, 1, 'away win');

COMMIT; -- ✅ On valide les matchs

BEGIN;

INSERT INTO "user"
("first_name","last_name","pseudo","email","password")
VALUES
('fabien','le goat','fabio','fabien.legoat@nostra.com','nostra'),
('abdel','le coatch','zizou','abdel.lecoatch@nostra.com','nostra'),
('lucas', 'dupont', 'lulu', 'lucas.dupont@nostra.com', 'nostra'),
('marie', 'lefevre', 'marinette', 'marie.lefevre@nostra.com', 'nostra'),
('julien', 'martin', 'juju', 'julien.martin@nostra.com', 'nostra'),
('sophie', 'bernard', 'so', 'sophie.bernard@nostra.com', 'nostra'),
('kevin', 'durand', 'keke', 'kevin.durand@nostra.com', 'nostra'),
('amelie', 'robert', 'amie', 'amelie.robert@nostra.com', 'nostra'),
('thomas', 'lambert', 'tomtom', 'thomas.lambert@nostra.com', 'nostra'),
('camille', 'morel', 'cami', 'camille.morel@nostra.com', 'nostra');

COMMIT;

-- ✅ INSERT PREDICTIONS AVEC SOUS-REQUÊTES
BEGIN;

INSERT INTO "prediction"
("user_id","match_id","score_predi_home","score_predi_away","points_score","points_outcome")

VALUES
((SELECT "user_id" FROM "user" WHERE "pseudo" = 'fabio'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') LIMIT 1),
 3, 1, 3, 3),
 

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'zizou'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') LIMIT 1),
 2, 2, 1, 1),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'lulu'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') LIMIT 1),
 1, 0, 3, 3),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'marinette'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') LIMIT 1),
 2, 1, 0, 1),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'juju'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') LIMIT 1),
 1, 3, 0, 0),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'so'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis')LIMIT 1),
 2, 0, 3, 3),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'keke'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes')  LIMIT 1),
 2, 2, 1, 1),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'amie'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') LIMIT 1),
 3, 2, 3, 3),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'tomtom'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') LIMIT 1),
 0, 1, 0, 1),

((SELECT "user_id" FROM "user" WHERE "pseudo" = 'cami'),
 (SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') LIMIT 1),
 1, 1, 1, 1);

COMMIT;

-- ✅ TABLE `play` POUR MATCHS ET ÉQUIPES
BEGIN;

INSERT INTO "play" ("match_id", "team_id", "role")
VALUES

-- Match 1 : PSG vs OM
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-12 15:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'away'),

 -- Match 2 : Olympique de Marseille vs LOSC Lille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-13 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-13 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'away'),

 -- Match 3 : AS Monaco vs RC Lens
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-14 17:00:00+02'  LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'away'),

 -- Match 4 : LOSC Lille vs RC Lens
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-15 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-15 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'away'),

-- Match 5 : OGC Nice vs LOSC Lille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') AND "date" = '2025-02-16 19:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'away'),

-- Match 6 : RC Lens vs Olympique de Marseille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') AND "date" = '2025-02-17 15:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'away'),

-- Match 7 : PSG vs AS Monaco
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-18 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-18 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'away'),
 
-- Match 8 : Olympique de Marseille vs OGC Nice
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-19 17:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-19 17:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'away'),

-- Match 9 : AS Monaco vs OGC Nice
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-20 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-20 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'away'),

-- Match 10 : LOSC Lille vs PSG
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-21 19:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-21 19:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'away');

 
COMMIT;
-- ✅ TABLE `own` POUR COMPÉTITIONS ET ÉQUIPES
BEGIN;

INSERT INTO "own"
("competition_id","team_id")
VALUES
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'paris saint-germain'));

COMMIT;