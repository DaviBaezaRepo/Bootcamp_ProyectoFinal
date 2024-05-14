DROP SCHEMA IF EXISTS FinalProject;
CREATE SCHEMA IF NOT EXISTS FinalProject;
USE FinalProject;

CREATE TABLE IF NOT EXISTS newsletter (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL
  );
  
CREATE TABLE IF NOT EXISTS enduser (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    newpassword VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    isentity BOOLEAN,
    entity VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS activity (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    explanation VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    dateandtime DATETIME NOT NULL,
    categories VARCHAR(255),
    organizer VARCHAR(255),
    lat VARCHAR(255),
    lon VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS UserHasEvents (
    id_enduser INT UNSIGNED,
    id_activity INT UNSIGNED,
    CONSTRAINT fk_id_enduser FOREIGN KEY (id_enduser)
        REFERENCES enduser (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_id_activity FOREIGN KEY (id_activity)
        REFERENCES activity (id)
        ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO enduser VALUES 
(NULL,'David','Baeza Castillo', 'davidbc_98@hotmail.com', 'M@icol89',"https://randomuser.me/api/portraits/men/64.jpg", true,'Bezoya S.L'),
(NULL,'Thirza','Visser', 'thirzavisser95@gmail.com', 'D@vid8765', "https://randomuser.me/api/portraits/women/10.jpg", true, 'Grupo Castilla S.L'),
(NULL,'Sara','Didouh', 'saradidouh22@gmail.com', 'M@llorca2024',"https://randomuser.me/api/portraits/women/45.jpg", true, 'TSystems S.L'),
(NULL,'Alex','Marco Mesa', 'alexeitor@gmail.com', 'Se@at2987',"https://randomuser.me/api/portraits/men/50.jpg", true, 'Fundacion Esplai S.L'),
(NULL,'Sheerezade','Gomez Roig', 'Sheerezita@gmail.com', 'Gominolita87', "https://randomuser.me/api/portraits/women/40.jpg", true, 'Wingardium S.L'),
(NULL,'Albert','Fernandez Morata', 'Albertitu@hotmail.com', 'Pyth@onMolaM@s',"https://randomuser.me/api/portraits/men/30.jpg", true, 'Amazon S.L'),
(NULL,'Adrian','Milan', 'adrimilan@hotmail.com', 'Viv@J@v@', "https://randomuser.me/api/portraits/men/60.jpg", true, 'Sony S.L'),
(NULL,'Moha','Kebdani Ghazi', 'Mohammito@gmail.com', 'M@handoC@fe',"https://randomuser.me/api/portraits/men/70.jpg", true, 'Genetic UI S.L'),
(NULL,'Sergio','Robla', 'SergioFrontend@hotmail.com', 'Fr@ntendM@la', "https://randomuser.me/api/portraits/men/80.jpg", true, 'Architects World S.L'),
(NULL,'Sergi','Florensa Montagut', 'Segiflorensa@hotmail.com', 'S@yM@delo', "https://randomuser.me/api/portraits/men/17.jpg", true, 'Future Tecnologies IA S.L'),
(NULL,'Dani','Uribe', 'Danimetal@hotmail.com', 'Viv@elmetal98767', "https://randomuser.me/api/portraits/men/15.jpg", true, 'OpenAI S.L'),
(NULL,'Eric','Alcantara Valenzuela', 'ericalcantaravalen@hotmail.com', 'P@kerF@ace', "https://randomuser.me/api/portraits/men/14.jpg", true, 'Meta S.L'),
(NULL,'Aitor','Lardin', 'Aitormenta@hotmail.com', 'InL0veBBD', "https://randomuser.me/api/portraits/men/10.jpg",true, 'Microsoft S.L');


INSERT INTO activity VALUES 
(NULL, "Plantar arboles","Jornada de Reforestación en el Parque Nacional de Teide, Tenerife, donde voluntarios se unen para plantar árboles autóctonos y restaurar áreas degradadas, contribuyendo a la conservación de la biodiversidad y la protección del medio ambiente","/assets/planting-trees.jpg","Tenerife Teide", "2-3 horas","2024-04-03 14:30:00","Animales, Medio Ambiente","2",28.27384424339801, -16.64156563347158),
(NULL, "Actividades con ancianos","Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores","/assets/old-people-playing.jpg","Reus", "4 horas","2024-06-30 09:30:00","Cuidados, Ciudadania","1", 41.14270428199402, 1.1011896387438063),
(NULL, "Recogida de alimentos","Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña","/assets/food-donations.jpg","Valencia", "5-6 horas","2024-10-05 10:30:00","Alimentos, Social","3",39.47371162496371, -0.37903430367228663),
(NULL, "Playa Limpia","Limpieza de la playa de San Sebastián para preservar la belleza natural y proteger la vida marina. ¡Únete y haz la diferencia!","/assets/beach-cleanup.jpg","San Sebastian", "5 horas","2024-08-15 10:30:00","VidaMarina,EcoSistema","5", 43.3182682817734, -2.1763622451659077),
(NULL, "Campaña de Donación de Sangre","Campaña de donación de sangre en el Hospital General de Valencia. ¡Tu donación puede salvar vidas!","/assets/blood-donation.jpg","Valencia", "7 horas","2024-09-20 10:30:00","Donaciones","6", 39.443707088168175, -0.3760582397497932);


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

SELECT * FROM enduser;

