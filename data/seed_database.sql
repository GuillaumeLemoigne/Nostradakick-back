BEGIN;

INSERT INTO "competition"
("name","season","logo")
VALUES
('Ligue 1', '2024-2025', 'ligue1_logo.png')

;

INSERT INTO "team"
("name","country","city","logo")
VALUES
('Paris Saint-Germain', 'France', 'Paris', 'psg_logo.png'),
('Olympique de Marseille', 'France', 'Marseille', 'om_logo.png'),
('AS Monaco', 'France', 'Monaco', 'asm_logo.png'),
('LOSC Lille', 'France', 'Lille', 'losc_logo.png'),
('OGC Nice', 'France', 'Nice', 'ogcn_logo.png'),
('RC Lens', 'France', 'Lens', 'rcl_logo.png')
;

INSERT INTO "match"
("competition_id","date","stadium","score_home","score_away","outcome")
VALUES
(1, '2025-02-10 15:00:00+02', 'Parc des Princes', 3, 1, 'Home Win'),
(1, '2025-02-11 16:00:00+02', 'Stade Vélodrome', 2, 2, 'Draw'),
(1, '2025-02-12 20:00:00+02', 'Stade Louis-II', 1, 0, 'Home Win'),
(1, '2025-02-13 19:00:00+02', 'Stade Pierre-Mauroy', 0, 1, 'Away Win'),
(1, '2025-02-14 17:00:00+02', 'Allianz Riviera', 2, 3, 'Away Win'),
(1, '2025-02-15 20:00:00+02', 'Stade Bollaert-Delelis', 1, 1, 'Draw')
;

INSERT INTO "user"
("first_name","last_name","pseudo","email","password")
VALUES
('Fabien','LE Goat','Fabio','fabien.legoat@nostra.com','nostra'),
('Abdel','LE Coatch','Zizou','abdel.lecoatch@nostra.com','nostra'),
('Yvan','L''artiste','Davinci','yvan.davinci@nostra.com','nostra'),
('Guillaume','Lemoigne','Paladin','guillaume.paladin@nostra.com','nostra')
;

INSERT INTO "prediction"
("user_id","match_id","score_predi_home","score_predi_away","points_score","points_outcome")
VALUES
(1,1,3, 1, 3, 3), 
(2,2,2, 1, 0, 3), 
(3,3,1, 1, 3, 3), 
(4,4,2, 1, 0, 0), 
(3,5,1, 0, 3, 3), 
(4,6,0, 1, 0, 3) 
;

INSERT INTO "match_has_team"
("match_id","team_id")
VALUES
(1, 1), 
(1, 2), 
(2, 3), 
(2, 4), 
(3, 5), 
(3, 6)
;

INSERT INTO "competition_id_has_team_id"
("competition_id","team_id")
VALUES
(1, 1),
(1, 2), 
(1, 3), 
(1, 4), 
(1, 5), 
(1, 6)
;

COMMIT;
