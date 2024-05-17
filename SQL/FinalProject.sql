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
    explanation TEXT NOT NULL,
    image VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    dateandtime DATETIME NOT NULL,
    categories VARCHAR(255),
    organizer INT unsigned,
    lat VARCHAR(255),
    lon VARCHAR(255),
    constraint fk_organizer_user_id FOREIGN KEY(organizer)
		REFERENCES enduser(id)
         ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS user_has_events (
    id_enduser INT UNSIGNED,
    id_activity INT UNSIGNED,
    CONSTRAINT fk_id_enduser FOREIGN KEY (id_enduser)
        REFERENCES enduser (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_id_activity FOREIGN KEY (id_activity)
        REFERENCES activity (id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS saved_events (
    id_enduser INT UNSIGNED,
    id_activity INT UNSIGNED,
    CONSTRAINT fk_id_enduser_save FOREIGN KEY (id_enduser)
        REFERENCES enduser (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_id_activity_save FOREIGN KEY (id_activity)
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
(NULL,'Aitor','Lardin', 'Aitormenta@hotmail.com', 'InL0veBBD', "https://randomuser.me/api/portraits/men/10.jpg",true, 'Microsoft S.L'),
(NULL,'Admin','Admin', 'admin@admin.com', 'admin', "https://randomuser.me/api/portraits/men/10.jpg",true, 'admin');


INSERT INTO activity VALUES 
(NULL, "Jornada de Reforestación","La Fundación Raíces Verdes se compromete a liderar un movimiento global hacia un futuro más verde y sostenible mediante la plantación masiva de árboles. Nuestra visión es un mundo donde los bosques florezcan, la biodiversidad prospere y las comunidades prosperen en armonía con la naturaleza. Con un enfoque en la reforestación a gran escala y la educación ambiental, buscamos inspirar y capacitar a individuos y comunidades para que se conviertan en guardianes activos de nuestro preciado planeta. Juntos, estamos sembrando las semillas para un mañana más prometedor y lleno de vida. \n\n En nuestros eventos de plantación de árboles, reunimos a voluntarios apasionados y comunidades locales para llevar a cabo una jornada de acción ambiental significativa. Proporcionamos orientación experta sobre cómo plantar y cuidar los árboles, asegurando que cada participante se sienta capacitado y comprometido con el proceso. Además de sembrar árboles, ofrecemos actividades educativas y de sensibilización ambiental, promoviendo la comprensión de la importancia de los bosques para el equilibrio ecológico y el bienestar humano. Estos eventos no solo son una oportunidad para hacer una diferencia tangible en el medio ambiente, sino también para construir conexiones significativas entre las personas y la naturaleza, inspirando un sentido de comunidad y responsabilidad compartida hacia la protección de nuestro planeta.","/assets/planting-trees.jpg","Prades", "2-3 horas","2024-04-03 09:30:00","Medio Ambiente","2",41.311623, 0.988119),
(NULL, "Actividades con ancianos","Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores","/assets/old-people-playing.jpg","Reus", "4 horas","2024-06-30 09:30:00","Cuidados, Ciudadania","1", 41.14270428199402, 1.1011896387438063),
(NULL, "Recogida de alimentos","Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña","/assets/food-donations.jpg","Valencia", "5-6 horas","2024-10-05 10:30:00","Alimentos, Social","3",39.47371162496371, -0.37903430367228663),
(NULL, "Playa Limpia","Limpieza de la playa de San Sebastián para preservar la belleza natural y proteger la vida marina. ¡Únete y haz la diferencia!","/assets/beach-cleanup.jpg","San Sebastian", "5 horas","2024-08-15 10:30:00","VidaMarina,EcoSistema","5", 43.3182682817734, -2.1763622451659077),
(NULL, "Campaña de Donación de Sangre","Campaña de donación de sangre en el Hospital General de Valencia. ¡Tu donación puede salvar vidas!","/assets/blood-donation.jpg","Valencia", "7 horas","2024-09-20 10:30:00","Donaciones","6", 39.443707088168175, -0.3760582397497932);


INSERT INTO user_has_events VALUES
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

INSERT INTO saved_events VALUES
(1,2),
(1,3),
(1,5),
(2,2),
(3,1),
(4,5),
(5,1),
(5,5),
(6,1),
(7,2),
(8,1),
(9,1);

SELECT * FROM enduser;
select * From activity;
SELECT * FROM user_has_events;
SELECT * FROM saved_events;

