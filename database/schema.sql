drop database if exists planets_db;
create database planets_db;
use planets_db;

create table planets (
    id int NOT NULL AUTO_INCREMENT,
    planet_name varchar(255) NOT NULL,
    devoured BOOLEAN default false,
    time_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

insert into planets (planet_name) values
    ('Terra'),
    ('Sirius'),
    ('Alpha Centauri'),
    ('Cadia');


select * from planets;