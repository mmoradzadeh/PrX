CREATE TABLE City (
    ID INT,
    Name VARCHAR(100),
    CountryCode VARCHAR(10),
    District VARCHAR(100),
    Population INT
);

INSERT INTO City (ID, Name, CountryCode, District, Population) VALUES
(1, 'Toronto', 'CAN', 'Ontario', 2800000),
(2, 'Paris', 'FRA', 'Île-de-France', 2148000);
