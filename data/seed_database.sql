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
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-10 15:00:00+02', 'parc des princes', 3, 1, 'home win'),
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-11 16:00:00+02', 'stade vélodrome', 2, 2, 'draw');

COMMIT; -- ✅ On valide les matchs

BEGIN;

INSERT INTO "player"
("first_name","last_name","pseudo","email","password")
VALUES
('fabien','le goat','fabio','fabien.legoat@nostra.com','nostra'),
('abdel','le coatch','zizou','abdel.lecoatch@nostra.com','nostra');

COMMIT;

-- ✅ INSERT PREDICTIONS AVEC SOUS-REQUÊTES
BEGIN;

INSERT INTO "prediction"
("player_id","match_id","score_predi_home","score_predi_away","points_score","points_outcome")
VALUES
((SELECT "player_id" FROM "player" WHERE "pseudo" = 'fabio'),
 (SELECT "match_id" FROM "match" WHERE "stadium" = 'parc des princes' AND "date" = '2025-02-10 15:00:00+02'),
 3, 1, 3, 3);

COMMIT;

-- ✅ TABLE `play` POUR MATCHS ET ÉQUIPES
BEGIN;

INSERT INTO "play"
("match_id","team_id","role")
VALUES
((SELECT "match_id" FROM "match" WHERE "stadium" = 'parc des princes'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'paris saint-germain'), 'home'),
((SELECT "match_id" FROM "match" WHERE "stadium" = 'parc des princes'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'olympique de marseille'), 'away');

COMMIT;

-- ✅ TABLE `own` POUR COMPÉTITIONS ET ÉQUIPES
BEGIN;

INSERT INTO "own"
("competition_id","team_id")
VALUES
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'paris saint-germain'));

COMMIT;