BEGIN;

INSERT INTO "match"
("competition_id","date","stadium","score_home","score_away","outcome")
VALUES

    -- Match 1 : le havre vs PSG
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-25 19:45:00+02', 'Stade Océane', 1, 4, 'away win'),
    -- Match 1 : Brest vs OM
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-26 16:00:00+02', 'Stade Francis Le Blé', 1, 5, 'away win'),
    -- Match 1 : Reims vs Lille
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-26 18:00:00+02', 'Stade Auguste Delaune', 0, 2, 'away win'),
    -- Match 1 : Monaco vs St Etienne
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-26 20:00:00+02', 'Stade Louis II', 1, 0, 'home win'),
    -- Match 1 : Monaco vs St Etienne
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-27 14:00:00+02', 'Stade Abbé-Deschamps', 2, 1, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-27 16:00:00+02', 'Stade Raymond Kopa', 0, 1, 'away win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-27 16:00:00+02', 'Stade de la Mosson', 1, 1, 'draw'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-27 16:00:00+02', 'Stadium de Toulouse', 0, 0, 'draw'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-27 19:45:00+02', 'Roazhon Park', 3, 0, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-02-28 19:45:00+02', 'Parc des Princes', 6, 0, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-01 16:00:00+02', 'Groupama Stadium', 0, 2, 'away win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-01 18:00:00+02', 'Stade Pierre-Mauroy', 2, 0, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-01 20:00:00+02', 'Stade Geoffroy-Guichard', 0, 2, 'away win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-02 14:00:00+02', 'Stade Bollaert-Delelis', 2, 0, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-02 16:00:00+02', 'Stade de la Beaujoire', 2, 0, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-02 16:00:00+02', 'Allianz Riviera', 1, 1, 'draw'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-02 16:00:00+02', 'Stade de la Meinau', 3, 1, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-02 19:45:00+02', 'Orange Vélodrome', 2, 2, 'draw'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-03 19:45:00+02', 'Groupama Stadium', 4, 3, 'home win'),
    -- Match 1 : Angers vs St Lens
    ((SELECT "competition_id" FROM "competition" WHERE "name" = 'ligue 1'), '2025-03-04 16:00:00+02', 'Stade Francis-Le Blé', 4, 0, 'home win');





COMMIT; -- ✅ On valide les matchs

-- Paris Saint-Germain - Parc des Princes
-- AS Monaco - Stade Louis-II
-- Stade Brestois 29 - Stade Francis-Le Blé
-- LOSC Lille - Stade Pierre-Mauroy (Decathlon Arena)
-- OGC Nice - Allianz Riviera
-- Olympique Lyonnais - Groupama Stadium
-- RC Lens - Stade Bollaert-Delelis
-- Olympique de Marseille - Orange Vélodrome (Stade Vélodrome)
-- Stade de Reims - Stade Auguste-Delaune
-- Stade Rennais FC - Roazhon Park
-- Toulouse FC - Stadium de Toulouse
-- Montpellier HSC - Stade de la Mosson
-- RC Strasbourg - Stade de la Meinau
-- FC Nantes - Stade de la Beaujoire
-- Le Havre AC - Stade Océane
-- AJ Auxerre - Stade de l'Abbé-Deschamps
-- Angers SCO - Stade Raymond-Kopa
-- AS Saint-Étienne - Stade Geoffroy-Guichard


-- ✅ TABLE `play` POUR MATCHS ET ÉQUIPES
BEGIN;

INSERT INTO "play" ("match_id", "team_id", "role")
VALUES

 -- Match 1 : Le Havre vs PSG
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Océane') AND "date" = '2025-02-25 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Le Havre AC') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Océane') AND "date" = '2025-02-25 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-germain') LIMIT 1), 'away'),
 -- Match 2 : Brest vs OM
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Francis Le Blé') AND "date" = '2025-02-26 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade Brestois 29') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Francis Le Blé') AND "date" = '2025-02-26 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'away'),
 -- Match 3 : Reims vs Lille
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Auguste Delaune') AND "date" = '2025-02-26 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade de Reims') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Auguste Delaune') AND "date" = '2025-02-26 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'away'),
 -- Match 4 : Monaco vs St Etienne
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-26 20:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Louis II') AND "date" = '2025-02-26 20:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Saint-Étienne') LIMIT 1), 'away'),
 -- Match 5 : Auxerre vs Nice
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Abbé-Deschamps') AND "date" = '2025-02-27 14:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AJ Auxerre') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Abbé-Deschamps') AND "date" = '2025-02-27 14:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'away'),
 -- Match 6 : Angers vs Lens
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Raymond Kopa') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Angers SCO') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Raymond Kopa') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'away'),
 -- Match 7 : Montpellier vs Strasbourg
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Mosson') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Montpellier HSC') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Mosson') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Strasbourg Alsace') LIMIT 1), 'away'),
 -- Match 8 : Toulouse vs Nantes
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stadium de Toulouse') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Toulouse FC') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stadium de Toulouse') AND "date" = '2025-02-27 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('FC Nantes') LIMIT 1), 'away'),
 -- Match 9 : Stade Rennais FC vs Olympique Lyonnais
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Roazhon Park') AND "date" = '2025-02-27 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade Rennais FC') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Roazhon Park') AND "date" = '2025-02-27 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique Lyonnais') LIMIT 1), 'away'),
 -- Match 10 : Paris SG vs Montpellier
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-28 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Paris Saint-germain') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Parc des Princes') AND "date" = '2025-02-28 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Montpellier HSC') LIMIT 1), 'away'),
 -- Match 11 : Lyon vs Monaco
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Groupama Stadium') AND "date" = '2025-03-01 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique Lyonnais') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Groupama Stadium') AND "date" = '2025-03-01 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Monaco') LIMIT 1), 'away'),
 -- Match 12 : Lyon vs Monaco
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-03-01 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('LOSC Lille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Pierre-Mauroy') AND "date" = '2025-03-01 18:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Angers SCO') LIMIT 1), 'away'),
 -- Match 13 : St Etienne vs Le Havre
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Geoffroy-Guichard') AND "date" = '2025-03-01 20:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Saint-Étienne') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Geoffroy-Guichard') AND "date" = '2025-03-01 20:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Le Havre AC') LIMIT 1), 'away'),
 -- Match 14 : Lens vs Brest
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') AND "date" = '2025-03-02 14:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Lens') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Bollaert-Delelis') AND "date" = '2025-03-02 14:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade Brestois 29') LIMIT 1), 'away'),
 -- Match 15 : Nantes vs Auxerre
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Beaujoire') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('FC Nantes') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Beaujoire') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AJ Auxerre') LIMIT 1), 'away'),
 -- Match 16 : Nice vs Toulouse
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('OGC Nice') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Allianz Riviera') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Toulouse FC') LIMIT 1), 'away'),
 -- Match 17 : Strasbourg vs Rennes
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Meinau') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Strasbourg Alsace') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade de la Meinau') AND "date" = '2025-03-02 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade Rennais FC') LIMIT 1), 'away'),
 -- Match 18 : Marseille vs Reims
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Orange Vélodrome') AND "date" = '2025-03-02 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique de Marseille') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Orange Vélodrome') AND "date" = '2025-03-02 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade de Reims') LIMIT 1), 'away'),
 -- Match 19 : Lyon vs Strasbourg
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Groupama Stadium') AND "date" = '2025-03-03 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Olympique Lyonnais') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Groupama Stadium') AND "date" = '2025-03-03 19:45:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('RC Strasbourg Alsace') LIMIT 1), 'away'),
 -- Match 20 : Brest vs St Etienne
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Francis-Le Blé') AND "date" = '2025-03-04 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('Stade Brestois 29') LIMIT 1), 'home'),
((SELECT "match_id" FROM "match" WHERE LOWER("stadium") = LOWER('Stade Francis-Le Blé') AND "date" = '2025-03-04 16:00:00+02' LIMIT 1),
 (SELECT "team_id" FROM "team" WHERE LOWER("name") = LOWER('AS Saint-Étienne') LIMIT 1), 'away');


COMMIT;






-- ('F1', '04/03/2025', '18:00', 'Montpellier', 'Nantes', '1', '3', 'A');
-- ('F1', '04/03/2025', '20:00', 'Toulouse', 'Marseille', '1', '3', 'A');
-- ('F1', '05/03/2025', '14:00', 'Monaco', 'Lens', '1', '1', 'D');
-- ('F1', '05/03/2025', '16:00', 'Angers', 'Nice', '1', '4', 'A');
-- ('F1', '05/03/2025', '16:00', 'Le Havre', 'Auxerre', '3', '1', 'H');
-- ('F1', '05/03/2025', '16:00', 'Reims', 'Rennes', '2', '1', 'H');
-- ('F1', '05/03/2025', '19:45', 'Lille', 'Paris SG', '1', '3', 'A');
-- ('F1', '06/03/2025', '19:45', 'St Etienne', 'Lille', '1', '0', 'H');
-- ('F1', '06/03/2025', '16:00', 'Marseille', 'Nice', '2', '0', 'H');
-- ('F1', '06/03/2025', '18:00', 'Auxerre', 'Monaco', '0', '3', 'A');
-- ('F1', '06/03/2025', '20:00', 'Paris SG', 'Brest', '3', '1', 'H');
-- ('F1', '06/03/2025', '14:00', 'Rennes', 'Montpellier', '3', '0', 'H');
-- ('F1', '06/03/2025', '16:00', 'Nantes', 'Reims', '1', '2', 'A');
-- ('F1', '06/03/2025', '16:00', 'Strasbourg', 'Angers', '1', '1', 'D');
-- ('F1', '06/03/2025', '16:00', 'Toulouse', 'Le Havre', '2', '0', 'H');
-- ('F1', '06/03/2025', '19:45', 'Lens', 'Lyon', '0', '0', 'D');
-- ('F1', '07/03/2025', '19:45', 'Nice', 'St Etienne', '8', '0', 'H');
-- ('F1', '07/03/2025', '16:00', 'Lille', 'Strasbourg', '3', '3', 'D');
-- ('F1', '07/03/2025', '18:00', 'Rennes', 'Lens', '1', '1', 'D');
-- ('F1', '07/03/2025', '20:00', 'Reims', 'Paris SG', '1', '1', 'D');
-- ('F1', '08/03/2025', '14:00', 'Monaco', 'Le Havre', '3', '1', 'H');
-- ('F1', '08/03/2025', '16:00', 'Angers', 'Nantes', '1', '1', 'D');
-- ('F1', '08/03/2025', '16:00', 'Brest', 'Toulouse', '2', '0', 'H');
-- ('F1', '08/03/2025', '16:00', 'Montpellier', 'Auxerre', '3', '2', 'H');
-- ('F1', '08/03/2025', '19:45', 'Lyon', 'Marseille', '2', '3', 'A');
-- ('F1', '09/03/2025', '18:00', 'Auxerre', 'Brest', '3', '0', 'H');
-- ('F1', '09/03/2025', '20:00', 'Paris SG', 'Rennes', '3', '1', 'H');
-- ('F1', '10/03/2025', '16:00', 'Lens', 'Nice', '0', '0', 'D');
-- ('F1', '10/03/2025', '18:00', 'Le Havre', 'Lille', '0', '3', 'A');
-- ('F1', '10/03/2025', '20:00', 'Monaco', 'Montpellier', '2', '1', 'H');
-- ('F1', '11/03/2025', '14:00', 'Toulouse', 'Lyon', '1', '2', 'A');
-- ('F1', '11/03/2025', '16:00', 'Angers', 'Reims', '1', '3', 'A');
-- ('F1', '11/03/2025', '16:00', 'Nantes', 'St Etienne', '2', '2', 'D');
-- ('F1', '11/03/2025', '19:45', 'Strasbourg', 'Marseille', '1', '0', 'H');
-- ('F1', '12/03/2025', '19:45', 'Marseille', 'Angers', '1', '1', 'D');
-- ('F1', '13/03/2025', '16:00', 'St Etienne', 'Auxerre', '3', '1', 'H');
-- ('F1', '13/03/2025', '18:00', 'Lille', 'Toulouse', '2', '1', 'H');
-- ('F1', '13/03/2025', '20:00', 'Rennes', 'Monaco', '1', '2', 'A');
-- ('F1', '14/03/2025', '14:00', 'Lyon', 'Nantes', '2', '0', 'H');
-- ('F1', '14/03/2025', '16:00', 'Brest', 'Le Havre', '2', '0', 'H');
-- ('F1', '14/03/2025', '16:00', 'Reims', 'Montpellier', '4', '2', 'H');
-- ('F1', '14/03/2025', '16:00', 'Strasbourg', 'Lens', '2', '2', 'D');
-- ('F1', '14/03/2025', '19:45', 'Nice', 'Paris SG', '1', '1', 'D');
-- ('F1', '15/03/2025', '19:45', 'Monaco', 'Lille', '0', '0', 'D');
-- ('F1', '16/03/2025', '16:00', 'Brest', 'Rennes', '1', '1', 'D');
-- ('F1', '16/03/2025', '18:00', 'St Etienne', 'Lens', '0', '2', 'A');
-- ('F1', '16/03/2025', '20:00', 'Paris SG', 'Strasbourg', '4', '2', 'H');
-- ('F1', '17/03/2025', '14:00', 'Le Havre', 'Lyon', '0', '4', 'A');
-- ('F1', '17/03/2025', '16:00', 'Auxerre', 'Reims', '2', '1', 'H');
-- ('F1', '17/03/2025', '16:00', 'Nantes', 'Nice', '1', '1', 'D');
-- ('F1', '17/03/2025', '16:00', 'Toulouse', 'Angers', '1', '1', 'D');
-- ('F1', '17/03/2025', '19:45', 'Montpellier', 'Marseille', '0', '5', 'A');
-- ('F1', '18/03/2025', '19:45', 'Rennes', 'Le Havre', '1', '0', 'H');
-- ('F1', '18/03/2025', '16:00', 'Angers', 'St Etienne', '4', '2', 'H');
-- ('F1', '18/03/2025', '18:00', 'Reims', 'Brest', '1', '2', 'A');
-- ('F1', '18/03/2025', '20:00', 'Lens', 'Lille', '0', '2', 'A');
-- ('F1', '19/03/2025', '14:00', 'Lyon', 'Auxerre', '2', '2', 'D');
-- ('F1', '19/03/2025', '16:00', 'Montpellier', 'Toulouse', '0', '3', 'A');
-- ('F1', '19/03/2025', '16:00', 'Nice', 'Monaco', '2', '1', 'H');
-- ('F1', '19/03/2025', '16:00', 'Strasbourg', 'Nantes', '3', '1', 'H');
-- ('F1', '19/03/2025', '19:45', 'Marseille', 'Paris SG', '0', '3', 'A');
-- ('F1', '20/03/2025', '18:00', 'Monaco', 'Angers', '0', '1', 'A');
-- ('F1', '20/03/2025', '20:00', 'Lille', 'Lyon', '1', '1', 'D');
-- ('F1', '21/03/2025', '16:00', 'Paris SG', 'Lens', '1', '0', 'H');
-- ('F1', '21/03/2025', '18:00', 'Brest', 'Nice', '0', '1', 'A');
-- ('F1', '22/03/2025', '20:00', 'St Etienne', 'Strasbourg', '2', '0', 'H');
-- ('F1', '22/03/2025', '14:00', 'Toulouse', 'Reims', '1', '0', 'H');
-- ('F1', '22/03/2025', '16:00', 'Auxerre', 'Rennes', '4', '0', 'H');
-- ('F1', '22/03/2025', '16:00', 'Le Havre', 'Montpellier', '1', '0', 'H');
-- ('F1', '22/03/2025', '19:45', 'Nantes', 'Marseille', '1', '2', 'A');
-- ('F1', '23/03/2025', '19:45', 'Marseille', 'Auxerre', '1', '3', 'A');
-- ('F1', '24/03/2025', '16:00', 'Strasbourg', 'Monaco', '1', '3', 'A');
-- ('F1', '24/03/2025', '18:00', 'Lens', 'Nantes', '3', '2', 'H');
-- ('F1', '24/03/2025', '20:00', 'Angers', 'Paris SG', '2', '4', 'A');
-- ('F1', '25/03/2025', '14:00', 'Nice', 'Lille', '2', '2', 'D');
-- ('F1', '25/03/2025', '16:00', 'Le Havre', 'Reims', '0', '3', 'A');
-- ('F1', '25/03/2025', '16:00', 'Montpellier', 'Brest', '3', '1', 'H');
-- ('F1', '25/03/2025', '16:00', 'Rennes', 'Toulouse', '0', '2', 'A');
-- ('F1', '25/03/2025', '19:45', 'Lyon', 'St Etienne', '1', '0', 'H');
-- ('F1', '26/03/2025', '18:00', 'Monaco', 'Brest', '3', '2', 'H');
-- ('F1', '26/03/2025', '20:00', 'Paris SG', 'Toulouse', '3', '0', 'H');
-- ('F1', '26/03/2025', '16:00', 'Lens', 'Marseille', '1', '3', 'A');
-- ('F1', '26/03/2025', '18:00', 'St Etienne', 'Montpellier', '1', '0', 'H');
-- ('F1', '26/03/2025', '20:00', 'Reims', 'Lyon', '1', '1', 'D');
-- ('F1', '27/03/2025', '14:00', 'Lille', 'Rennes', '1', '0', 'H');
-- ('F1', '27/03/2025', '16:00', 'Auxerre', 'Angers', '1', '0', 'H');
-- ('F1', '27/03/2025', '16:00', 'Nantes', 'Le Havre', '0', '2', 'A');
-- ('F1', '27/03/2025', '19:45', 'Nice', 'Strasbourg', '2', '1', 'H');
-- ('F1', '28/03/2025', '19:45', 'Reims', 'Lens', '0', '2', 'A');
-- ('F1', '29/03/2025', '16:00', 'Rennes', 'St Etienne', '5', '0', 'H');
-- ('F1', '29/03/2025', '18:00', 'Brest', 'Strasbourg', '3', '1', 'H');
-- ('F1', '29/03/2025', '20:00', 'Paris SG', 'Nantes', '1', '1', 'D');
-- ('F1', '30/03/2025', '14:00', 'Montpellier', 'Lille', '2', '2', 'D');
-- ('F1', '30/03/2025', '16:00', 'Le Havre', 'Angers', '0', '1', 'A');
-- ('F1', '30/03/2025', '16:00', 'Lyon', 'Nice', '4', '1', 'H');
-- ('F1', '30/03/2025', '16:00', 'Toulouse', 'Auxerre', '2', '0', 'H');
-- ('F1', '30/03/2025', '19:45', 'Marseille', 'Monaco', '2', '1', 'H');
-- ('F1', '31/03/2025', '18:00', 'Lille', 'Brest', '3', '1', 'H');
-- ('F1', '31/03/2025', '20:00', 'Auxerre', 'Paris SG', '0', '0', 'D');
-- ('F1', '01/04/2025', '16:00', 'Monaco', 'Toulouse', '2', '0', 'H');
-- ('F1', '01/04/2025', '18:00', 'Nice', 'Le Havre', '2', '1', 'H');
-- ('F1', '01/04/2025', '20:00', 'Angers', 'Lyon', '0', '3', 'A');
-- ('F1', '02/04/2025', '14:00', 'Lens', 'Montpellier', '2', '0', 'H');
-- ('F1', '02/04/2025', '16:00', 'Nantes', 'Rennes', '1', '0', 'H');
-- ('F1', '02/04/2025', '16:00', 'Strasbourg', 'Reims', '0', '0', 'D');
-- ('F1', '02/04/2025', '19:45', 'St Etienne', 'Marseille', '0', '2', 'A');
-- ('F1', '03/04/2025', '19:45', 'Toulouse', 'St Etienne', '2', '1', 'H');
-- ('F1', '04/04/2025', '16:00', 'Marseille', 'Lille', '1', '1', 'D');
-- ('F1', '04/04/2025', '18:00', 'Auxerre', 'Lens', '2', '2', 'D');
-- ('F1', '04/04/2025', '20:00', 'Reims', 'Monaco', '0', '0', 'D');
-- ('F1', '05/04/2025', '14:00', 'Montpellier', 'Nice', '2', '2', 'D');
-- ('F1', '05/04/2025', '16:00', 'Brest', 'Nantes', '4', '1', 'H');
-- ('F1', '05/04/2025', '16:00', 'Le Havre', 'Strasbourg', '0', '3', 'A');
-- ('F1', '05/04/2025', '16:00', 'Rennes', 'Angers', '2', '0', 'H');
-- ('F1', '05/04/2025', '19:45', 'Paris SG', 'Lyon', '3', '1', 'H');
-- ('F1', '06/04/2025', '20:00', 'Monaco', 'Paris SG', '2', '4', 'A');
-- ('F1', '07/04/2025', '20:00', 'Nice', 'Rennes', '3', '2', 'H');
-- ('F1', '07/04/2025', '16:00', 'St Etienne', 'Reims', '3', '1', 'H');
-- ('F1', '07/04/2025', '18:00', 'Lille', 'Nantes', '1', '1', 'D');
-- ('F1', '07/04/2025', '20:00', 'Lyon', 'Montpellier', '1', '0', 'H');
-- ('F1', '08/04/2025', '14:00', 'Angers', 'Brest', '2', '0', 'H');
-- ('F1', '08/04/2025', '14:00', 'Lens', 'Toulouse', '0', '1', 'A');
-- ('F1', '08/04/2025', '14:00', 'Strasbourg', 'Auxerre', '3', '1', 'H');
-- ('F1', '08/04/2025', '19:45', 'Marseille', 'Le Havre', '5', '1', 'H');
-- ('F1', '09/04/2025', '18:00', 'Nantes', 'Monaco', '2', '2', 'D');
-- ('F1', '09/04/2025', '20:05', 'Auxerre', 'Lille', '0', '0', 'D');
-- ('F1', '10/04/2025', '16:00', 'Brest', 'Lyon', '2', '1', 'H');
-- ('F1', '10/04/2025', '18:00', 'Reims', 'Nice', '2', '4', 'A');
-- ('F1', '10/04/2025', '20:05', 'Rennes', 'Marseille', '1', '2', 'A');
-- ('F1', '11/04/2025', '14:00', 'Le Havre', 'Lens', '1', '2', 'A');
-- ('F1', '11/04/2025', '16:15', 'Montpellier', 'Angers', '1', '3', 'A');
-- ('F1', '11/04/2025', '16:15', 'Toulouse', 'Strasbourg', '1', '2', 'A');
-- ('F1', '11/04/2025', '19:45', 'Paris SG', 'St Etienne', '2', '1', 'H');
-- ('F1', '12/04/2025', '18:00', 'Montpellier', 'Monaco', '2', '1', 'H');
-- ('F1', '12/04/2025', '20:05', 'Lille', 'Nice', '2', '1', 'H');
-- ('F1', '13/04/2025', '16:00', 'Lens', 'Paris SG', '1', '2', 'A');
-- ('F1', '13/04/2025', '18:00', 'Rennes', 'Brest', '1', '2', 'A');
-- ('F1', '13/04/2025', '20:05', 'Lyon', 'Toulouse', '0', '0', 'D');
-- ('F1', '14/04/2025', '14:00', 'St Etienne', 'Nantes', '1', '1', 'D');
-- ('F1', '14/04/2025', '16:15', 'Angers', 'Auxerre', '2', '0', 'H');
-- ('F1', '14/04/2025', '16:15', 'Reims', 'Le Havre', '1', '1', 'D');
-- ('F1', '14/04/2025', '19:45', 'Marseille', 'Strasbourg', '1', '1', 'D');
-- ('F1', '15/04/2025', '19:45', 'Auxerre', 'St Etienne', '1', '1', 'D');
-- ('F1', '16/04/2025', '16:00', 'Monaco', 'Rennes', '3', '2', 'H');
-- ('F1', '16/04/2025', '18:00', 'Strasbourg', 'Lille', '2', '1', 'H');
-- ('F1', '16/04/2025', '20:05', 'Paris SG', 'Reims', '1', '1', 'D');
-- ('F1', '17/04/2025', '14:00', 'Le Havre', 'Brest', '0', '1', 'A');
-- ('F1', '17/04/2025', '16:15', 'Lens', 'Angers', '1', '0', 'H');
-- ('F1', '17/04/2025', '16:15', 'Nantes', 'Lyon', '1', '1', 'D');
-- ('F1', '17/04/2025', '16:15', 'Toulouse', 'Montpellier', '1', '2', 'A');
-- ('F1', '17/04/2025', '19:45', 'Nice', 'Marseille', '2', '0', 'H');
-- ('F1', '18/04/2025', '19:45', 'Montpellier', 'Lens', '0', '2', 'A');
-- ('F1', '19/04/2025', '16:00', 'Brest', 'Paris SG', '2', '5', 'A');
-- ('F1', '19/04/2025', '18:00', 'Monaco', 'Auxerre', '4', '2', 'H');
-- ('F1', '19/04/2025', '20:05', 'Lille', 'St Etienne', '4', '1', 'H');
-- ('F1', '20/04/2025', '14:00', 'Toulouse', 'Nice', '1', '1', 'D');
-- ('F1', '20/04/2025', '16:15', 'Angers', 'Le Havre', '1', '1', 'D');
-- ('F1', '20/04/2025', '16:15', 'Reims', 'Nantes', '1', '2', 'A');
-- ('F1', '20/04/2025', '16:15', 'Rennes', 'Strasbourg', '1', '0', 'H');
-- ('F1', '20/04/2025', '19:45', 'Marseille', 'Lyon', '3', '2', 'H');
-- ('F1', '21/04/2025', '18:00', 'Nantes', 'Brest', '0', '2', 'A');
-- ('F1', '21/04/2025', '20:05', 'Paris SG', 'Monaco', '4', '1', 'H');
-- ('F1', '22/04/2025', '16:00', 'Nice', 'Lens', '2', '0', 'H');
-- ('F1', '22/04/2025', '18:00', 'Lille', 'Le Havre', '1', '2', 'A');
-- ('F1', '22/04/2025', '20:05', 'St Etienne', 'Rennes', '0', '2', 'A');
-- ('F1', '23/04/2025', '14:00', 'Lyon', 'Reims', '4', '0', 'H');
-- ('F1', '23/04/2025', '16:15', 'Auxerre', 'Toulouse', '2', '2', 'D');
-- ('F1', '23/04/2025', '16:15', 'Strasbourg', 'Montpellier', '2', '0', 'H');
-- ('F1', '23/04/2025', '19:45', 'Angers', 'Marseille', '0', '2', 'A');
-- ('F1', '24/04/2025', '19:45', 'Brest', 'Auxerre', '2', '2', 'D');
-- ('F1', '25/04/2025', '16:00', 'Marseille', 'St Etienne', '5', '1', 'H');
-- ('F1', '25/04/2025', '18:00', 'Monaco', 'Nantes', '7', '1', 'H');
-- ('F1', '25/04/2025', '20:05', 'Toulouse', 'Paris SG', '0', '1', 'A');
-- ('F1', '26/04/2025', '14:00', 'Montpellier', 'Lyon', '1', '4', 'A');
-- ('F1', '26/04/2025', '16:15', 'Le Havre', 'Nice', '1', '3', 'A');
-- ('F1', '26/04/2025', '16:15', 'Lens', 'Strasbourg', '0', '2', 'A');
-- ('F1', '26/04/2025', '16:15', 'Reims', 'Angers', '0', '1', 'A');
-- ('F1', '26/04/2025', '19:45', 'Rennes', 'Lille', '0', '2', 'A');
-- ('F1', '27/04/2025', '19:45', 'Rennes', 'Reims', '1', '0', 'H');
-- ('F1', '28/04/2025', '16:00', 'Lille', 'Monaco', '2', '1', 'H');
-- ('F1', '28/04/2025', '18:00', 'St Etienne', 'Angers', '3', '3', 'D');
-- ('F1', '28/04/2025', '20:05', 'Auxerre', 'Marseille', '3', '0', 'H');
-- ('F1', '29/04/2025', '14:00', 'Nantes', 'Lens', '3', '1', 'H');
-- ('F1', '30/04/2025', '16:15', 'Le Havre', 'Toulouse', '1', '4', 'A');
-- ('F1', '30/04/2025', '16:15', 'Nice', 'Montpellier', '2', '0', 'H');
-- ('F1', '30/04/2025', '16:15', 'Strasbourg', 'Brest', '0', '0', 'D');
-- ('F1', '30/04/2025', '19:45', 'Lyon', 'Paris SG', '2', '3', 'A');
