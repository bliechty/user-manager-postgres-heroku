CREATE TABLE public.book (
	id serial,
	author varchar(50) not null,
	book_name varchar(100) not null,
	date_published date not null,
	created_date date default now()
);

insert into book (author, book_name, date_published) values
    ('Lonie Miller', 'We Capture the Castle', to_date('8/3/1992','MM/DD/YYYY')),
    ('Emelia Hane', 'Mortal Engines: Go Go Go', to_date('8/25/1999','MM/DD/YYYY')),
    ('Hilario Spinka', 'The Summer Games', to_date('5/8/2004','MM/DD/YYYY')),
    ('Ciara Ondricka II', 'Stormbreaker', to_date('5/23/1991','MM/DD/YYYY')),
    ('Trace Schuster', 'The Owl And The Cat', to_date('10/18/1989','MM/DD/YYYY')),
    ('Magali Baumbach', 'The True Story of the Three Little Pigs', to_date('5/20/2016','MM/DD/YYYY')),
    ('Randal Cruickshank', 'That Rabbit Belongs to Benny and Jerry', to_date('2/1/1985','MM/DD/YYYY')),
    ('Melyna Waters', 'I want Ice-Cream', to_date('7/2/2013','MM/DD/YYYY')),
    ('Bertha Green', 'You Got Mail', to_date('4/4/1981','MM/DD/YYYY')),
    ('Frida Kemmer', 'I Am Number Three', to_date('11/29/2004','MM/DD/YYYY'));