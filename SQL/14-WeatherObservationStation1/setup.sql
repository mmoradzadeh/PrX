CREATE TABLE STATION (
    ID INT,
    CITY VARCHAR(100),
    STATE VARCHAR(10),
    LAT_N INT,
    LONG_W INT
);

INSERT INTO STATION (ID, CITY, STATE, LAT_N, LONG_W) VALUES
(1, 'Seattle', 'WA', 47, 122),
(2, 'Toronto', 'ON', 43, 79),
(3, 'Boston', 'MA', 42, 71),
(4, 'Vancouver', 'BC', 49, 123);
