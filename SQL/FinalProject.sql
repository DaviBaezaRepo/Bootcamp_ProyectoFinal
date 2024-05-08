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
    image VARCHAR(150),
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
    categories VARCHAR(155),
    organizer VARCHAR(150)
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
(NULL,'David','Baeza Castillo', 'davidbc_98@hotmail.com', 'M@icol89', 'death_angel',"https://randomuser.me/api/portraits/men/2.jpg",'Bezoya S.L'),
(NULL,'Thirza','Visser', 'thirzavisser95@gmail.com', 'D@vid8765', 'thirza_visser98',"https://randomuser.me/api/portraits/women/50.jpg",'Grupo Castilla S.L'),
(NULL,'Sara','Didouh', 'saradidouh22@gmail.com', 'M@llorca2024', 'SaraDidouh21',"https://randomuser.me/api/portraits/women/25.jpg",'TSystems S.L'),
(NULL,'Alex','Marco Mesa', 'alexeitor@gmail.com', 'Se@at2987', 'alexeitor309',"https://randomuser.me/api/portraits/men/50.jpg",'Fundacion Esplai S.L'),
(NULL,'Sheerezade','Gomez Roig', 'Sheerezita@gmail.com', 'Sheerecita1995', 'Gominolita87',"https://randomuser.me/api/portraits/women/60.jpg",'Wingardium S.L'),
(NULL,'Albert','Fernandez Morata', 'Albertitu@hotmail.com', 'Pyth@onMolaM@s', 'Wormgate87',"https://randomuser.me/api/portraits/men/30.jpg",'Amazon S.L'),
(NULL,'Adrian','Milan', 'adrimilan@hotmail.com', 'Viv@J@v@', 'TuGatito98',"https://randomuser.me/api/portraits/men/60.jpg",'Sony S.L'),
(NULL,'Moha','Kebdani Ghazi', 'Mohammito@gmail.com', 'M@handoC@fe', 'Mohhamedkeb',"https://randomuser.me/api/portraits/men/70.jpg",'Genetic UI S.L'),
(NULL,'Sergio','Robla', 'SergioFrontend@hotmail.com', 'Fr@ntendM@la', 'SergioROBLA76',"https://randomuser.me/api/portraits/men/80.jpg",'Architects World S.L'),
(NULL,'Sergi','Florensa Montagut', 'Segiflorensa@hotmail.com', 'S@yM@delo', 'Sergielmodelo37',"https://randomuser.me/api/portraits/men/17.jpg",'Future Tecnologies IA S.L'),
(NULL,'Dani','Uribe', 'Danimetal@hotmail.com', 'Viv@elmetal98767', 'DaniUribe32',"https://randomuser.me/api/portraits/men/15.jpg",'OpenAI S.L'),
(NULL,'Eric','Alcantara Valenzuela', 'ericalcantaravalen@hotmail.com', 'P@kerF@ace', 'EricAlcantara95',"https://randomuser.me/api/portraits/men/14.jpg",'Meta S.L'),
(NULL,'Aitor','Lardin', 'Aitormenta@hotmail.com', 'InL0veBBD', 'Aitorlardin',"https://randomuser.me/api/portraits/men/10.jpg",'Microsoft S.L');


INSERT INTO Event VALUES 
(NULL, "Plantar arboles","Jornada de Reforestación en el Parque Nacional de Teide, Tenerife, donde voluntarios se unen para plantar árboles autóctonos y restaurar áreas degradadas, contribuyendo a la conservación de la biodiversidad y la protección del medio ambiente","../src/assets/planting-trees.jpg","Tarragona El Vendrell", "2-3 horas","2024-04-03 14:30:00","Animales, Medio Ambiente","2"),
(NULL, "Actividades con ancianos","Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores","../src/assets/old-people-playing.jpg","Reus", "4 horas","2024-06-30 09:30:00","Cuidados, Ciudadania","1"),
(NULL, "Recogida de alimentos","Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña","../src/assets/food-donations.jpg","Barcelona", "5-6 horas","2024-10-05 10:30:00","Alimentos, Social","3"),
(NULL, "Playa Limpia","Limpieza de la playa de San Sebastián para preservar la belleza natural y proteger la vida marina. ¡Únete y haz la diferencia!","../src/assets/beach-cleanup.jpg","Torredembarra", "5 horas","2024-08-15 10:30:00","VidaMarina,EcoSistema","5"),
(NULL, "Campaña de Donación de Sangre","Campaña de donación de sangre en el Hospital General de Valencia. ¡Tu donación puede salvar vidas!","../src/assets/blood-donation.jpg","Vila Seca", "7 horas","2024-09-20 10:30:00","Donaciones","6");


INSERT INTO UserHasEvents VALUES
(1,1),
(1,2),
(1,4),
(2,1),
(3,4),
(4,2),
(5,3),
(4,1),
(6,4),
(7,5),
(8,3),
(9,2);

SELECT * FROM UserHasEvents 

