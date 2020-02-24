create table users (
    _id serial primary key,
	first varchar(255) not null,
	last varchar(255) not null,
	age int not null,
	emailaddress varchar(255) not null,
	createddate varchar default now()
);

insert into users (first, last, age, emailaddress) values
	('Jeri', 'Donaldson', 24, 'jeridonaldson@corporana.com'),
	('Lorrie', 'Phillips', 43, 'lorriephillips@corporana.com'),
	('Elaine', 'Marshall', 72, 'elainemarshall@corporana.com'),
	('Gertrude', 'Wells', 75, 'gertrudewells@corporana.com'),
	('Snow', 'Puckett', 58, 'snowpuckett@corporana.com'),
	('Knox', 'Holt', 34, 'knoxholt@corporana.com'),
	('Hebert', 'Rutledge', 49, 'hebertrutledge@corporana.com'),
	('Meyer', 'Hayes', 41, 'meyerhayes@corporana.com'),
	('Vaughan', 'Wagner', 28, 'vaughanwagner@corporana.com'),
	('Etta', 'Hernandez', 70, 'ettahernandez@corporana.com');