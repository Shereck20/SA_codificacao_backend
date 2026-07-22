create table animal (
    id serial primary key,
    nome varchar(100) not null,
    especie varchar(100) not null,
    idade int,
    status_saude varchar(100) default 'saudavel'
);
