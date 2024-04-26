DROP SCHEMA IF EXISTS FinalProject;
CREATE SCHEMA IF NOT EXISTS FinalProject;
USE FinalProject;

CREATE TABLE IF NOT EXISTS User (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    organizer BOOLEAN,
    entity VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Event (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    dateandtime DATETIME NOT NULL,
    categories VARCHAR(155)
);

CREATE TABLE IF NOT EXISTS UserHasEvents (
    id_user INT UNSIGNED,
    id_event INT UNSIGNED,
    CONSTRAINT fk_id_user FOREIGN KEY (id_user)
        REFERENCES User (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_id_event FOREIGN KEY (id_event)
        REFERENCES Event (id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO User VALUES
(NULL,'David','Baeza Castillo', 'davidbc_98@hotmail.com', 'M@icol89', 'death_angel',NULL,'Bezoya S.L'),
(NULL,'Thirza','Visser', 'thirzavisser95@gmail.com', 'D@vid8765', 'thirza_visser98',NULL,'Grupo Castilla S.L'),
(NULL,'Sara','Didouh', 'saradidouh22@gmail.com', 'M@llorca2024', 'SaraDidouh21',NULL,'TSystems S.L'),
(NULL,'Alex','Marco Mesa', 'alexeitor@gmail.com', 'Se@at2987', 'alexeitor309',NULL,'Fundacion Esplai S.L'),
(NULL,'Sheerezade','Gomez Roig', 'Sheerezita@gmail.com', 'Sheerecita1995', 'Gominolita87',NULL,'Wingardium S.L'),
(NULL,'Albert','Fernandez Morata', 'Albertitu@hotmail.com', 'Pyth@onMolaM@s', 'Wormgate87',NULL,'Amazon S.L'),
(NULL,'Adrian','Milan', 'adrimilan@hotmail.com', 'Viv@J@v@', 'TuGatito98',NULL,'Sony S.L'),
(NULL,'Moha','Kebdani Ghazi', 'Mohammito@gmail.com', 'M@handoC@fe', 'Mohhamedkeb',NULL,'Genetic UI S.L'),
(NULL,'Sergio','Robla', 'SergioFrontend@hotmail.com', 'Fr@ntendM@la', 'SergioROBLA76',NULL,'Architects World S.L'),
(NULL,'Sergi','Florensa Montagut', 'Segiflorensa@hotmail.com', 'S@yM@delo', 'Sergielmodelo37',NULL,'Future Tecnologies IA S.L'),
(NULL,'Dani','Uribe', 'Danimetal@hotmail.com', 'Viv@elmetal98767', 'DaniUribe32',NULL,'OpenAI S.L'),
(NULL,'Eric','Alcantara Valenzuela', 'ericalcantaravalen@hotmail.com', 'P@kerF@ace', 'EricAlcantara95',NULL,'Meta S.L'),
(NULL,'Aitor','Lardin', 'Aitormenta@hotmail.com', 'InL0veBBD', 'Aitorlardin',NULL,'Microsoft S.L');


INSERT INTO Event VALUES 
(NULL, "Se busca voluntariado para una asociacion de animales","¡Únete y haz la diferencia! Únete a nuestro equipo de voluntarios en la Asociación de Rescate Animal Patas Felices",NULL,"Tarragona El Vendrell", "2-3 horas","2024-04-26 14:30:00","Animales, Medio Ambiente");




