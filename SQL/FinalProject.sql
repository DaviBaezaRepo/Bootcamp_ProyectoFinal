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
    image longtext,
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
(NULL, 'Juan', 'López Pérez', 'juan.lopez@example.com', 'contraseña1', 'https://randomuser.me/api/portraits/men/64.jpg', false, NULL),
(NULL, 'María', 'García Martínez', 'maria.garcia@example.com', 'contraseña2', 'https://randomuser.me/api/portraits/women/36.jpg', false, NULL),
(NULL, 'Antonio', 'Martín Sánchez', 'antonio.martin@example.com', 'contraseña3', 'https://randomuser.me/api/portraits/men/65.jpg', false, NULL),
(NULL, 'Carmen', 'Sánchez López', 'carmen.sanchez@example.com', 'contraseña4', 'https://randomuser.me/api/portraits/women/45.jpg', false, NULL),
(NULL, 'José', 'Pérez González', 'jose.perez@example.com', 'contraseña5', 'https://randomuser.me/api/portraits/men/66.jpg', false, NULL),
(NULL, 'Ana', 'Gómez Rodríguez', 'ana.gomez@example.com', 'contraseña6', 'https://randomuser.me/api/portraits/women/25.jpg', false, NULL),
(NULL, 'Francisco', 'Hernández Martínez', 'francisco.hernandez@example.com', 'contraseña7', 'https://randomuser.me/api/portraits/men/50.jpg', false, NULL),
(NULL, 'Isabel', 'Díaz Pérez', 'isabel.diaz@example.com', 'contraseña8', 'https://randomuser.me/api/portraits/women/67.jpg', false, NULL),
(NULL, 'Manuel', 'Torres Sánchez', 'manuel.torres@example.com', 'contraseña9', 'https://randomuser.me/api/portraits/men/18.jpg', false, NULL),
(NULL, 'Laura', 'Ruiz González', 'laura.ruiz@example.com', 'contraseña10', 'https://randomuser.me/api/portraits/women/68.jpg', false, NULL),
(NULL, 'Pedro', 'Jiménez Martínez', 'pedro.jimenez@example.com', 'contraseña11', 'https://randomuser.me/api/portraits/men/39.jpg', false, NULL),
(NULL, 'Sara', 'López Rodríguez', 'sara.lopez@example.com', 'contraseña12', 'https://randomuser.me/api/portraits/women/42.jpg', false, NULL),
(NULL, 'Ángel', 'Gómez Sánchez', 'angel.gomez@example.com', 'contraseña13', 'https://randomuser.me/api/portraits/men/43.jpg', false, NULL),
(NULL, 'Lucía', 'Hernández Rodríguez', 'lucia.hernandez@example.com', 'contraseña14', 'https://randomuser.me/api/portraits/women/32.jpg', false, NULL),
(NULL, 'David', 'Martínez González', 'david.martinez@example.com', 'contraseña15', 'https://randomuser.me/api/portraits/men/27.jpg', false, NULL),
(NULL, 'Elena', 'Pérez Martínez', 'elena.perez@example.com', 'contraseña16', 'https://randomuser.me/api/portraits/women/60.jpg', false, NULL),
(NULL, 'Javier', 'Sánchez Sánchez', 'javier.sanchez@example.com', 'contraseña17', 'https://randomuser.me/api/portraits/men/33.jpg', false, NULL),
(NULL, 'Marina', 'González Rodríguez', 'marina.gonzalez@example.com', 'contraseña18', 'https://randomuser.me/api/portraits/women/26.jpg', false, NULL),
(NULL, 'Miguel', 'Rodríguez Martínez', 'miguel.rodriguez@example.com', 'contraseña19', 'https://randomuser.me/api/portraits/men/48.jpg', false, NULL),
(NULL, 'Silvia', 'Martínez Martínez', 'silvia.martinez@example.com', 'contraseña20', 'https://randomuser.me/api/portraits/women/19.jpg', false, NULL),
(NULL, 'Carlos', 'Pérez Sánchez', 'carlos.perez@example.com', 'contraseña21', 'https://randomuser.me/api/portraits/men/22.jpg', false, NULL),
(NULL, 'Raquel', 'Sánchez López', 'raquel.sanchez@example.com', 'contraseña22', 'https://randomuser.me/api/portraits/women/49.jpg', false, NULL),
(NULL,'Admin','Admin', 'admin@admin.com', 'admin', "https://randomuser.me/api/portraits/men/10.jpg",true, 'admin');


INSERT INTO activity VALUES 
(NULL, "Jornada de Reforestación","La Fundación Raíces Verdes lidera un movimiento hacia un futuro más verde mediante la plantación de árboles y la educación ambiental. Voluntarios y comunidades locales plantan árboles y aprenden sobre su cuidado, fomentando la protección del planeta y fortaleciendo los lazos comunitarios.","/assets/planting-trees.jpg","Prades", "2-3 horas","2024-04-03 09:30:00","Medio Ambiente","2",41.311623, 0.988119),
(NULL, "Actividades con ancianos","Visita al Hogar de Ancianos 'La Esperanza' en Madrid para compartir una tarde de música en vivo y juegos de mesa con los residentes, llevando alegría y compañía a nuestros mayores.","/assets/old-people-playing.jpg","Reus", "4 horas","2024-06-30 09:30:00","Cuidados, Ciudadania","1", 41.14270428199402, 1.1011896387438063),
(NULL, "Recogida de alimentos","Recogida de Alimentos en el Mercado Central de Valencia para apoyar a los comedores sociales locales y familias necesitadas durante la temporada navideña.","/assets/food-donations.jpg","Valencia", "5-6 horas","2024-10-05 10:30:00","Alimentos, Social","3",39.47371162496371, -0.37903430367228663),
(NULL, "Playa Limpia","Limpieza de la playa de San Sebastián para preservar la belleza natural y proteger la vida marina. ¡Únete y haz la diferencia!","/assets/beach-cleanup.jpg","San Sebastian", "5 horas","2024-08-15 10:30:00","VidaMarina,EcoSistema","5", 43.3182682817734, -2.1763622451659077),
(NULL, "Campaña de Donación de Sangre","Campaña de donación de sangre en el Hospital General de Valencia. ¡Tu donación puede salvar vidas!","/assets/blood-donation.jpg","Valencia", "7 horas","2024-09-20 10:30:00","Donaciones","6", 39.443707088168175, -0.3760582397497932),
(NULL, "Voluntariado en el parque natural","Ayuda a limpiar senderos y mantener el entorno natural del Parc Natural del Montseny. ¡Contribuye a la preservación de este espacio único!","/assets/beach-cleanup.jpg","Tarragona", "3 horas","2024-10-05 10:30:00","Medio ambiente","1", 41.754115, 2.344107),
(NULL, "Recogida de basura en la montaña","Participa en la recogida de residuos en zonas de montaña para preservar el ecosistema del Parc Natural de la Garrotxa.","/assets/beach-cleanup.jpg","Parc Natural de la Garrotxa", "4 horas","2024-10-06 09:00:00","Medio ambiente","2", 42.155067, 2.512254),
(NULL, "Apoyo a personas mayores en residencia","Brinda compañía y ayuda en actividades diarias a personas mayores en residencias en la Residència d'Avis de Girona.","/assets/beach-cleanup.jpg","Girona", "2 horas","2024-10-07 14:00:00","Bienestar","3", 41.983863, 2.821248),
(NULL, "Taller de reciclaje para niños","Enseña a los niños la importancia del reciclaje y cómo pueden contribuir al cuidado del medio ambiente en el Espai Ambiental Can Marfà.","/assets/beach-cleanup.jpg","Tarragona", "1 hora","2024-10-08 16:00:00","Educación","4", 41.972876, 2.809921),
(NULL, "Visita a refugiados en centro de acogida","Comparte tiempo y conversación con personas refugiadas para ofrecerles apoyo emocional en el Centre d'Acollida de Refugiats de Barcelona.","/assets/beach-cleanup.jpg","Barcelona", "3 horas","2024-10-09 11:00:00","Refugiados","5", 41.379749, 2.173305),
(NULL, "Cuidado de animales en refugio","Ayuda en el cuidado y alimentación de animales abandonados en un refugio en la Protectora d'Animals de Vic.","/assets/beach-cleanup.jpg","Vic", "5 horas","2024-10-10 10:00:00","Animales","6", 41.929564, 2.255749),
(NULL, "Apoyo escolar a niños en situación vulnerable","Brinda apoyo académico y emocional a niños en riesgo de exclusión social en el Centre Cívic de la Vila de Gràcia.","/assets/beach-cleanup.jpg","Barcelona", "4 horas","2024-10-11 15:00:00","Educación","7", 41.402590, 2.156721),
(NULL, "Voluntariado en banco de alimentos","Clasifica alimentos y colabora en la distribución a familias necesitadas en el Banc dels Aliments de Barcelona.","/assets/beach-cleanup.jpg","Barcelona", "3 horas","2024-10-12 08:00:00","Solidaridad","8", 41.377947, 2.166229),
(NULL, "Actividades recreativas para personas con discapacidad","Organiza juegos y actividades adaptadas para personas con discapacidad en la Fundació Catalana de l'Esplai.","/assets/beach-cleanup.jpg","Barcelona", "2 horas","2024-10-13 13:00:00","Discapacidad","9", 41.393029, 2.155832),
(NULL, "Campaña de sensibilización sobre reciclaje","Participa en la difusión de buenas prácticas y hábitos para el reciclaje en el Centre Cívic Sagrada Família.","/assets/beach-cleanup.jpg","Barcelona", "1 hora","2024-10-14 10:00:00","Medio ambiente","10", 41.404494, 2.170955),
(NULL, "Visita a niños hospitalizados","Lleva alegría y entretenimiento a niños hospitalizados con juegos y actividades en el Hospital Sant Joan de Déu.","/assets/beach-cleanup.jpg","Barcelona", "2 horas","2024-10-15 15:00:00","Bienestar","11", 41.389356, 2.118854);


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
(9,2),
(23,1),
(23,2),
(23,3);

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
(9,1),
(23,2),
(23,3),
(23,4);

SELECT * FROM enduser;
select * From activity;
SELECT * FROM user_has_events;
SELECT * FROM saved_events;

