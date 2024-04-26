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
(NULL,'David','Baeza Castillo', 'davidbc_98@hotmail.com', 'M@icol89', 'death_angel',NULL,'Bezoya S.L')

