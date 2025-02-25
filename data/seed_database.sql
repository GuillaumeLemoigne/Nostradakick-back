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
('Paris Saint-Germain', 'france', 'paris', 'https://media.api-sports.io/football/teams/85.png'),
('Olympique de Marseille', 'france', 'marseille', 'https://media.api-sports.io/football/teams/81.png'),
('AS Monaco', 'france', 'monaco', 'https://media.api-sports.io/football/teams/91.png'),
('LOSC Lille', 'france', 'lille', 'https://media.api-sports.io/football/teams/79.png'),
('OGC Nice', 'france', 'nice', 'https://media.api-sports.io/football/teams/84.png'),
('RC Lens', 'france', 'lens', 'https://media.api-sports.io/football/teams/116.png'),
('Angers SCO', 'France', 'Angers', 'https://media.api-sports.io/football/teams/77.png'),
('AJ Auxerre', 'France', 'Auxerre', 'https://media.api-sports.io/football/teams/108.png'),
('Stade Brestois 29', 'France', 'Brest', 'https://media.api-sports.io/football/teams/106.png'),
('Le Havre AC', 'France', 'Le Havre', 'https://media.api-sports.io/football/teams/111.png'),
('Olympique Lyonnais', 'France', 'Lyon', 'https://media.api-sports.io/football/teams/80.png'),
('Montpellier HSC', 'France', 'Montpellier', 'https://media.api-sports.io/football/teams/82.png'),
('FC Nantes', 'France', 'Nantes', 'https://media.api-sports.io/football/teams/83.png'),
('Stade de Reims', 'France', 'Reims', 'https://media.api-sports.io/football/teams/93.png'),
('Stade Rennais FC', 'France', 'Rennes', 'https://media.api-sports.io/football/teams/94.png'),
('RC Strasbourg Alsace', 'France', 'Strasbourg', 'https://media.api-sports.io/football/teams/95.png'),
('Toulouse FC', 'France', 'Toulouse', 'https://media.api-sports.io/football/teams/96.png'),
('AS Saint-Étienne', 'France', 'Saint-Étienne', 'https://media.api-sports.io/football/teams/1063.png');


COMMIT; -- ✅ On valide les équipes

BEGIN;

INSERT INTO "match"
("competition_id","date","stadium","score_home","score_away","outcome")
VALUES
-- Match 1 : PSG vs OM
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:00:00+02', 'Parc des Princes', 2, 1, 'home win'),
-- Match 2 : OM vs LOSC Lille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:05:00+02', 'Stade Vélodrome', 1, 0, 'home win'),
-- Match 3 : AS Monaco vs RC Lens
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:10:00+02', 'Stade Louis II', 3, 2, 'home win'),
-- Match 4 : LOSC Lille vs RC Lens
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:15:00+02', 'Stade Pierre-Mauroy', 1, 1, 'neutral'),
-- Match 5 : OGC Nice vs LOSC Lille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:20:00+02', 'Allianz Riviera', 0, 2, 'away win'),
-- Match 6 : RC Lens vs Olympique de Marseille
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:25:00+02', 'Stade Bollaert-Delelis', 2, 0, 'home win'),
-- Match 7 : PSG vs AS Monaco
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:30:00+02', 'Parc des Princes', 3, 1, 'home win'),
-- Match 8 : Olympique de Marseille vs OGC Nice
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:35:00+02', 'Stade Vélodrome', 2, 2, 'neutral'),
-- Match 9 : AS Monaco vs OGC Nice
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:40:00+02', 'Stade Louis II', 1, 3, 'away win'),
-- Match 10 : LOSC Lille vs PSG
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-24 20:45:00+02', 'Stade Pierre-Mauroy', 0, 1, 'away win');

COMMIT; -- ✅ On valide les matchs

BEGIN;

INSERT INTO "user"
("first_name","last_name","pseudo","email","password", "picture")
VALUES
('fabien','le goat','fabio','fabien.legoat@nostra.com','nostra', 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZjMWtoYWg3MDd4ZGN6cHM3MDlsanAxOXEzcHp1a2Q0cWoyOWtmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlIB9shbT2Awzhm/giphy.gif'),
('abdel','le coatch','zizou','abdel.lecoatch@nostra.com','nostra', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBrOGx5eGt0Mng2cDExcDVuOWFjcjg1aTVlYzVzYWJwemVicTI2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWbpKdoOPIbQzcY/giphy.gif'),
('lucas', 'dupont', 'lulu', 'lucas.dupont@nostra.com', 'nostra', 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXI4c3dwb2RrbXM5dzN4MXN4b2p6Mmt5emxqMWRjM200bjRuMXI0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThtacNubem2Lfxf0Y/giphy.gif'),
('marie', 'lefevre', 'marinette', 'marie.lefevre@nostra.com', 'nostra', 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmM2dHNqaDVqbTVkaHlib2V1cXg5ZTV6dnFyMXJ0d2tsNmFjYWdnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26ufkg5NXQGIkembK/giphy.gif'),
('julien', 'martin', 'juju', 'julien.martin@nostra.com', 'nostra', 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRwcW56aHIyNml6aW95a3NpaDVwdWRjZWtrOHZodDdueWhjOTkzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LpXU1smaWaVwR2v6Gu/giphy.gif'),
('sophie', 'bernard', 'so', 'sophie.bernard@nostra.com', 'nostra', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5yNHptajc0NTg1ZTA0bWluZGMyYTM4aDAwa3BwbG1vd2Jwd3EzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zzALYeLqMLDa6PEV2C/giphy.gif'),
('kevin', 'durand', 'keke', 'kevin.durand@nostra.com', 'nostra', 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnk2Z3M3dWZpNzd1N3hmc3d3cGR0czRlbzFqc2l4aGkyZXkzMmNxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7r5vNfdMVTVp7JkhGB/giphy.gif'),
('amelie', 'robert', 'amie', 'amelie.robert@nostra.com', 'nostra', 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanAycmNremdmdzFvMDF0Ymo2YmEwc3dhazl0cnNqNnN6cG1oNDM1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7GEXV0g6tYAbwRe7Xu/giphy.gif'),
('thomas', 'lambert', 'tomtom', 'thomas.lambert@nostra.com', 'nostra', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXlzZnJhMXRpYWcxOG5wMGl1djhjbW5vOTE3cms4aTBxbzloNHh1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pdfZ4IS8NXKEMPES94/giphy.gif'),
('camille', 'morel', 'cami', 'camille.morel@nostra.com', 'nostra', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXNmcnUxYXpteXR2YXppMXl1bzlnaGkyaWd2ZnAzZ2c3cjVtNjBtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rdma0nDFZMR32/giphy.gif');

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
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-24 20:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'away'),

 -- Match 2 : Olympique de Marseille vs LOSC Lille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-24 20:05:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-24 20:05:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'away'),

 -- Match 3 : AS Monaco vs RC Lens
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-24 20:10:00+02'  LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'away'),

 -- Match 4 : LOSC Lille vs RC Lens
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-24 20:15:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-24 20:15:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'away'),

-- Match 5 : OGC Nice vs LOSC Lille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') AND "date" = '2025-02-24 20:20:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'away'),

-- Match 6 : RC Lens vs Olympique de Marseille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') AND "date" = '2025-02-24 20:25:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'away'),

-- Match 7 : PSG vs AS Monaco
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-24 20:30:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-24 20:30:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'away'),
 
-- Match 8 : Olympique de Marseille vs OGC Nice
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-24 20:35:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Vélodrome') AND "date" = '2025-02-24 20:35:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'away'),

-- Match 9 : AS Monaco vs OGC Nice
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-24 20:40:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-24 20:40:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'away'),

-- Match 10 : LOSC Lille vs PSG
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-24 20:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-02-24 20:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-Germain') LIMIT 1), 'away');

 
COMMIT;
-- ✅ TABLE `own` POUR COMPÉTITIONS ET ÉQUIPES
BEGIN;

INSERT INTO "own"
("competition_id","team_id")
VALUES
((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'),
 (SELECT "team_id" FROM "team" WHERE "name" = 'Paris Saint-Germain'));

COMMIT;
