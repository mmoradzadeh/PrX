CREATE TABLE City (
    ID INT,
    Name VARCHAR(100),
    CountryCode VARCHAR(10),
    District VARCHAR(100),
    Population INT
);

INSERT INTO City (ID, Name, CountryCode, District, Population) VALUES
(1, 'Toronto', 'CAN', 'Ontario', 2800000),
(2, 'New York', 'USA', 'New York', 8800000),
(3, 'Vancouver', 'CAN', 'British Columbia', 675218),
(4, 'London', 'GBR', 'Greater London', 9304016),
(5, 'Paris', 'FRA', 'Île-de-France', 2148000),
(6, 'Oslo', 'NOR', 'Oslo', 681067);
