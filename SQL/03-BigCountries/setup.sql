CREATE TABLE World (
    name VARCHAR(50),
    continent VARCHAR(50),
    area INT,
    population INT,
    gdp BIGINT
);

INSERT INTO World (name, continent, area, population, gdp) VALUES
('Canada', 'North America', 9984670, 38000000, 2000000000000),
('Germany', 'Europe', 357386, 83000000, 4200000000000),
('France', 'Europe', 551695, 67000000, 3000000000000),
('Sweden', 'Europe', 450295, 10000000, 600000000000),
('Australia', 'Oceania', 7692024, 25000000, 1800000000000);
