# Setup using DBEAVER

Navigate to DBEAVER

Create a new PostgreSQL connection with the following info

* Host: localhost

* Port: 5432

* Database: usermanagerlocal

* User: postgres

(note: if you are using a different user make sure to use that user and change DB_USER in the .env file)

* Password: postgres

(note: if you are using a different password make sure to use that password and change DB_PASSWORD in the .env file)

Navigate to the SQL Shell, put in all relevant info, then enter the following command:

```
create database usermanagerlocal;
```

(note: if you want to change the name of the database make sure to change DB_DATABASE in the .env file)

Go back to dbeaver, right click on the connection you just made, and open SQL Editor

Enter the following commands into the editor and run both of them:

```
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
```

# Setup using PGADMIN 4

This is very similar to DBEAVER

Navigate to the SQL Shell, put in all relevant info, then enter the following command:

```
create database usermanagerlocal;
```

(note: if you want to change the name of the database make sure to change DB_DATABASE in the .env file)

Navigate to PGADMIN 4

Create a new server

In the general tab give the server whatever name you want

In the connection tab put the following info

* Host name/address: localhost

* Port: 5432

* Maintenance database: usermanagerlocal

* Username: postgres

(note: if you are using a different user make sure to use that user and change DB_USER in the .env file)

* Password: postgres

(note: if you are using a different password make sure to use that password and change DB_PASSWORD in the .env file)

Open databases under the server you just made, right click the maintenance database (usermanagerlocal) and click on Query Tool...

Enter the following commands into the query tool and run both of them:

```
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
```