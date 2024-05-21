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
(NULL, 'Raquel', 'Sánchez López', 'raquel.sanchez@example.com', 'contraseña22', 'https://randomuser.me/api/portraits/women/49.jpg', false, NULL);



INSERT INTO activity VALUES 
(NULL, "Jornada de Reforestación","La Fundación Raíces Verdes lidera un movimiento hacia un futuro más verde mediante la plantación de árboles y la educación ambiental. Voluntarios y comunidades locales plantan árboles y aprenden sobre su cuidado, fomentando la protección del planeta y fortaleciendo los lazos comunitarios.","/assets/planting-trees.jpg","Prades", "2-3 horas","2024-04-03 09:30:00","Medio Ambiente","2",41.311623, 0.988119),
(NULL, "Actividades con personas mayores","La visita al Hogar de Ancianos 'La Esperanza' en Reus es una oportunidad para compartir una tarde llena de alegría y compañía con los residentes. El evento incluye música en vivo, creando un ambiente festivo y estimulante. Además, se organizan diversos juegos de mesa para fomentar la interacción y el entretenimiento entre los participantes. Los voluntarios dedican su tiempo a conversar y conectar con los mayores, ofreciendo momentos de escucha y afecto. Esta actividad tiene como objetivo principal llevar felicidad y un sentido de comunidad a nuestros queridos ancianos. Los voluntarios dedican su tiempo a conversar y conectar con los mayores, ofreciendo momentos de escucha y afecto. Para apuntarse como voluntario, solo es necesario hacer clic en el botón Participar en nuestra página web. Esta actividad tiene como objetivo principal llevar felicidad y un sentido de comunidad a nuestros queridos ancianos.","/assets/old-people-playing.jpg","El Vendrell", "4 horas","2024-06-30 09:30:00","Cuidados, Ciudadania","1", 41.2167, 1.5333),
(NULL, "Recogida de alimentos","En el supermercado local, voluntarios se unen para recolectar alimentos no perecederos y productos de primera necesidad. Con carritos especialmente designados, invitan a los clientes a contribuir con su generosidad. Establecen puntos estratégicos dentro del establecimiento para facilitar las donaciones. Más que una recolección, es una muestra de solidaridad comunitaria. Los voluntarios informan sobre la importancia de la ayuda alimentaria y la conciencia social. Esta iniciativa fortalece los lazos de la comunidad al unir a personas con un propósito común. La generosidad de donantes y el compromiso de voluntarios hacen de esta actividad un evento con un impacto significativo en la sociedad.","/assets/food-donations.jpg","Vila-Seca", "5-6 horas","2024-10-05 10:30:00","Alimentos, Social","3", 41.1085, 1.1453),
(NULL, "Playa Limpia","En Playa Limpia voluntarios se unen para preservar el medio ambiente marino. Armados con bolsas y guantes, recogen desechos y plásticos que contaminan la costa. La jornada no solo busca limpiar, sino también educar sobre conservación costera. Charlas informativas resaltan el impacto del plástico en los océanos y la vida marina. El trabajo en equipo fortalece la conciencia ambiental en la comunidad. La iniciativa promueve un mensaje de cuidado y responsabilidad hacia nuestros ecosistemas. Al final del día, la playa queda más limpia y protegida, gracias al esfuerzo de los voluntarios. ¡Únete y haz la diferencia!","/assets/beach-cleanup.jpg","Miami Platja", "5 horas","2024-08-15 10:30:00","VidaMarina,EcoSistema","5", 41.0033, 0.9371),
(NULL, "Campaña de Donación de Sangre","La Campaña de Donación de Sangre es una oportunidad para salvar vidas y brindar esperanza a quienes más lo necesitan. En los centros de donación, voluntarios se unen en un acto de generosidad y solidaridad. Cada donación representa una valiosa contribución para pacientes en hospitales y emergencias médicas. La campaña destaca la importancia vital de la donación de sangre y su impacto directo en la salud pública. A través de charlas educativas, se informa a la comunidad sobre el valor y la necesidad continua de donar sangre. La participación activa en la campaña promueve la conciencia cívica y el compromiso social en la sociedad. Al finalizar, el esfuerzo de los donantes deja un legado de solidaridad y esperanza que transforma vidas. ¡Tu donación puede salvar vidas!","/assets/blood-donation.jpg","Tarragona", "7 horas","2024-09-20 10:30:00","Donaciones","6", 41.118883, 1.244491),
(NULL, "Voluntariado en el parque natural","El voluntariado en el Parque Natural es una oportunidad única para conectar con la naturaleza y contribuir a su conservación. Voluntarios de todas las edades se unen para proteger y preservar este invaluable tesoro natural. A través de actividades como limpieza de senderos y recolección de residuos, se promueve el cuidado del entorno. La participación activa en el voluntariado fortalece el sentido de pertenencia y responsabilidad hacia el medio ambiente. Se organizan jornadas educativas para sensibilizar sobre la importancia de la biodiversidad y los ecosistemas locales. El voluntariado en el Parque Natural es una experiencia enriquecedora que fomenta el aprendizaje y el trabajo en equipo. Al finalizar, el esfuerzo conjunto de los voluntarios deja un impacto positivo y duradero en la conservación del parque y su biodiversidad. ¡Contribuye a la preservación de este espacio único!","/assets/forest.jpg","Montblanc", "3 horas","2024-10-05 10:30:00","Medio ambiente","1", 41.3753, 1.1617),
(NULL, "Recogida de basura en la montaña","La recogida de basura en la montaña es una actividad esencial para preservar su belleza natural y proteger el medio ambiente. Los voluntarios se reúnen para limpiar senderos y áreas remotas, retirando desechos y residuos abandonados. Equipados con bolsas y guantes, trabajan en equipo para recoger todo tipo de basura, desde envases hasta restos de picnic. Esta iniciativa promueve la conciencia ambiental y el respeto hacia la naturaleza entre la comunidad. Además de limpiar, se realizan actividades educativas para destacar la importancia de mantener la montaña limpia y saludable. La participación en la recogida de basura fortalece el sentido de pertenencia y la conexión con el entorno natural. Al finalizar, el paisaje queda libre de contaminación, permitiendo a visitantes y animales disfrutar de un entorno más limpio y seguro.","/assets/mountain-cleanup.jpg","Falset", "4 horas","2024-10-06 09:00:00","Medio ambiente","2", 41.1483, 0.8221),
(NULL, "Apoyo a personas mayores en residencia","Apoyar a personas mayores en residencias es una labor que brinda compañía y ayuda en actividades diarias, mejorando su calidad de vida. Los voluntarios se comprometen a proporcionar un acompañamiento afectuoso y comprensivo, creando conexiones significativas con los residentes. Además de ofrecer compañía, ayudan en tareas cotidianas, como paseos y charlas, enriqueciendo el día a día de los mayores. Esta labor fortalece la conexión intergeneracional y promueve un ambiente de bienestar en la residencia. Los voluntarios también ofrecen su tiempo para escuchar y compartir conversaciones enriquecedoras, brindando apoyo emocional a los residentes. El apoyo a personas mayores en residencias es una muestra de solidaridad y respeto hacia quienes han contribuido tanto a nuestra sociedad. Al finalizar, tanto voluntarios como residentes experimentan gratitud por el valioso intercambio de experiencias y afecto.","/assets/old-people-shopping.jpg","Calafell", "2 horas","2024-10-07 14:00:00","Bienestar","3", 41.1987, 1.5767),
(NULL, "Taller de reciclaje para niños","En el taller de reciclaje para niños, aprenden de manera divertida la importancia de cuidar el medio ambiente desde pequeños. Mediante actividades creativas, descubren cómo reutilizar materiales y darles una nueva vida. Se les enseña sobre la separación adecuada de residuos y los beneficios del reciclaje para el planeta. Los niños participan activamente en clasificar materiales, desarrollando habilidades prácticas y conciencia ambiental. Este taller fomenta valores como la responsabilidad y el respeto hacia el entorno natural. Al trabajar en equipo, los niños aprenden la importancia de colaborar para cuidar el planeta. Al finalizar, se llevan consigo conocimientos prácticos y un compromiso con la protección del medio ambiente, que pueden compartir con su entorno.","/assets/kids-recycling.jpg","Tarragona", "1 hora","2024-10-08 16:00:00","Educación","4", 41.972876, 2.809921),
(NULL, "Visita a refugiados en centro de acogida","Una visita a refugiados en un centro de acogida es una oportunidad para brindar apoyo y solidaridad a quienes han dejado sus hogares en busca de seguridad. Los visitantes ofrecen compañía y escucha comprensiva a los refugiados, proporcionando un espacio seguro para compartir sus experiencias. Además de ofrecer apoyo emocional, se organizan actividades recreativas y educativas para promover el bienestar y la integración de los refugiados en la comunidad. Esta visita también es una oportunidad para sensibilizarse sobre las causas de la migración forzada y las necesidades de los refugiados. Al mostrar empatía y compasión, los visitantes contribuyen a crear un ambiente de acogida y solidaridad en el centro. La interacción entre visitantes y refugiados enriquece ambas partes, promoviendo el entendimiento mutuo y la aceptación. Al finalizar la visita, tanto visitantes como refugiados se despiden con la esperanza de un futuro más seguro y lleno de oportunidades para todos.","/assets/ayuda-humanitaria.jpg","Reus", "3 horas","2024-10-09 11:00:00","Refugiados","5", 41.1546, 1.1084),
(NULL, "Cuidado de animales en refugio","El cuidado de animales en un refugio es una labor de amor y dedicación hacia aquellos que no tienen voz. Los voluntarios se comprometen a brindar atención y cariño a los animales sin hogar. Además de alimentarlos y proporcionarles refugio, se les ofrece afecto y compañía para mejorar su bienestar emocional. Los voluntarios también se encargan de limpiar y mantener los espacios del refugio, garantizando un entorno saludable para los animales. Esta labor promueve la adopción responsable y la conciencia sobre el bienestar animal en la comunidad. El cuidado de animales en un refugio es una oportunidad para marcar una diferencia en la vida de aquellos que más lo necesitan. Al finalizar la jornada, tanto voluntarios como animales se despiden con la esperanza de un futuro mejor y lleno de amor.","/assets/volunteering-animals.jpg","Riudoms", "5 horas","2024-10-10 10:00:00","Animales","6", 41.1439, 1.0611),
(NULL, "Apoyo escolar a niños en situación vulnerable","El apoyo escolar a niños en situación vulnerable es una iniciativa que busca brindar oportunidades educativas equitativas. Voluntarios se comprometen a ofrecer asistencia académica y emocional a niños que enfrentan desafíos sociales y económicos. A través de tutorías personalizadas, los voluntarios ayudan a los niños a desarrollar habilidades académicas y fortalecer su confianza en sí mismos. Además de apoyo académico, se les ofrece un espacio seguro para expresar sus emociones y preocupaciones. Esta labor contribuye a cerrar la brecha educativa y promover la inclusión social de los niños vulnerables. El apoyo escolar no solo mejora el rendimiento académico, sino que también fomenta el desarrollo integral de los niños. Al finalizar, tanto voluntarios como niños se despiden con la esperanza de un futuro lleno de oportunidades y éxito académico.","/assets/volunteering-kids.jpg","Altafulla", "4 horas","2024-10-11 15:00:00","Educación","7", 41.1402, 1.3766),
(NULL, "Voluntariado en banco de alimentos","El voluntariado en un banco de alimentos es una oportunidad única para contribuir a la lucha contra el hambre y la inseguridad alimentaria. Los voluntarios se comprometen a recolectar, clasificar y distribuir alimentos a personas necesitadas en la comunidad. Trabajando en equipo, organizan jornadas de recolección de alimentos en supermercados y eventos locales. Además de distribuir alimentos, ofrecen apoyo y orientación a las personas que acuden en busca de ayuda. Esta labor fortalece el tejido social y promueve la solidaridad en la comunidad. El voluntariado en un banco de alimentos es una muestra tangible del impacto positivo que puede tener el trabajo voluntario en la vida de las personas más vulnerables. Al finalizar, tanto voluntarios como beneficiarios comparten un sentimiento de gratitud y esperanza por un futuro más justo y equitativo.","/assets/food-donation-2.jpg","L'Ampolla", "3 horas","2024-10-12 08:00:00","Solidaridad","8", 40.8145, 0.7063),
(NULL, "Actividades recreativas para personas con discapacidad","Las actividades recreativas para personas con discapacidad ofrecen oportunidades inclusivas y divertidas para todos. Voluntarios y profesionales se unen para diseñar actividades adaptadas que fomenten la participación de todos los participantes. Desde juegos de equipo hasta arte terapia, se busca promover el bienestar físico y emocional. Cada actividad se adapta cuidadosamente para satisfacer las necesidades y capacidades individuales de cada participante. Además de proporcionar entretenimiento, estas actividades fomentan la inclusión social y el sentido de comunidad. La creatividad y la diversión son el corazón de estas actividades, creando experiencias significativas y memorables. Al finalizar, tanto participantes como organizadores comparten sonrisas y momentos de alegría, fortaleciendo la conexión entre todos los involucrados.","/assets/voluntariado-discapacidad.jpg","Cambrils", "2 horas","2024-10-13 13:00:00","Discapacidad","9", 41.0692, 1.0601),
(NULL, "Campaña de sensibilización sobre reciclaje","Una campaña de sensibilización sobre reciclaje busca educar y motivar a la comunidad sobre la importancia de reciclar. A través de mensajes claros y actividades interactivas, se informa sobre los beneficios ambientales del reciclaje. La campaña destaca la reducción de la contaminación y la conservación de recursos naturales como principales razones para reciclar. Se promueve la separación adecuada de residuos y el uso de contenedores específicos para cada tipo de material. Además de informar sobre cómo reciclar, se enfatiza en la responsabilidad individual en la protección del medio ambiente. La creatividad y el ingenio son fundamentales para captar la atención del público y generar un impacto duradero. Al finalizar la campaña, se espera que la comunidad esté más comprometida y consciente de su papel en el cuidado del planeta.","/assets/recycling.jpg","Salou", "1 hora","2024-10-14 10:00:00","Medio ambiente","10", 41.0778, 1.1337),
(NULL, "Visita a niños hospitalizados","Visitar a niños hospitalizados es una forma especial de brindar apoyo y alegría en momentos difíciles. Los voluntarios llevan consigo sonrisas y actividades para hacer más llevadera la estancia en el hospital. Además de entretener, estas visitas ofrecen compañía y un espacio para compartir emociones. Los niños se benefician no solo del entretenimiento, sino también del afecto y la atención personalizada. Estas visitas fortalecen el ánimo y la esperanza tanto de los niños como de sus familias. La interacción con voluntarios y otros pacientes crea un ambiente cálido y acogedor en el hospital. Al despedirse, tanto los niños como los voluntarios se llevan consigo momentos de felicidad y conexión que perduran en el corazón.","/assets/voluntariado.jpg","Tarragona", "2 horas","2024-10-15 15:00:00","Bienestar","11", 41.1155, 1.2581),
(NULL, "Taller de jardinería comunitaria", "El taller de jardinería comunitaria es un espacio donde los vecinos se unen para aprender sobre el cuidado de las plantas y embellecer su entorno. Durante dos horas, se comparten técnicas de siembra y mantenimiento de jardines, promoviendo la colaboración y el sentido de pertenencia en el barrio. Esta actividad no solo embellece espacios públicos, sino que también fortalece los lazos entre los residentes y fomenta un entorno más verde y sostenible.", "/assets/gardening.jpg", "Alforja", "2 horas", "2024-09-20 10:00:00", "Medio ambiente", "10", 41.2136, 0.9716),
(NULL, "Campaña de donación de libros", "La Campaña de Donación de Libros es una iniciativa destinada a recolectar libros usados y llevar la magia de la lectura a comunidades desfavorecidas. Durante tres horas, se invita a la comunidad a contribuir con libros en buen estado, promoviendo así la educación y el acceso equitativo a la lectura en todas partes. Esta campaña no solo ofrece conocimiento, sino que también fomenta la solidaridad y el amor por la lectura, creando un impacto positivo en la vida de aquellos que más lo necesitan.", "/assets/book-donation-2.jpg", "Valls", "3 horas", "2024-11-05 09:00:00", "Educación", "8", 41.2861, 1.2494);



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
(10,1),
(10,2),
(4,3),
(6,3),
(9,3),
(10,3);

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

