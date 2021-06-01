create table task(
id  bigserial not null,
deadline date,
description varchar(255),
process boolean, tname varchar(255),
primary key (id)
                 );

create table users(
                     id  bigserial not null,
                     email varchar(255),
                     first_name varchar(255),
                     last_name varchar(255),
                     password varchar(255),
                     role varchar(255),
                     primary key (id)
)


