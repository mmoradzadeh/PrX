CREATE TABLE City (
    ID INT,
    Name VARCHAR(100),
    CountryCode VARCHAR(10),
    District VARCHAR(100),
    Population INT
);

INSERT INTO City (ID, Name, CountryCode, District, Population) VALUES
(1, 'Kabul', 'AFG', 'Kabol', 1780000),
(2, 'Qandahar', 'AFG', 'Qandahar', 237500),
(3, 'Herat', 'AFG', 'Herat', 186800),
(4, 'Mazar', 'AFG', 'Balkh', 127800),
(5, 'Amsterdam', 'NLD', 'Noord', 731200),
(6, 'Utrecht', 'NLD', 'Utrecht', 234323),
(7, 'Lille', 'FRA', 'Nord', 98000); -- Not expected to appear
