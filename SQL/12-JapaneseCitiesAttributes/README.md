# Japanese Cities' Attributes (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/japanese-cities-attributes/problem?isFullScreen=true)**

---

## 📖 Problem Description

Query **all attributes (columns)** of every Japanese city in the `City` table.  
The `CountryCode` for Japan is `'JPN'`.

---

## 📝 Example

### Example Input (City table):

| ID   | Name         | CountryCode | District    | Population |
|------|--------------|-------------|-------------|------------|
| 3793 | Hiroshima    | JPN         | Hiroshima   | 1260000    |
| 3794 | Osaka        | JPN         | Osaka       | 2590000    |
| 3795 | Kyoto        | JPN         | Kyoto       | 1475000    |
| 3796 | Toronto      | CAN         | Ontario     | 2800000    |

### Example Output:

```text
3793  Hiroshima  JPN  Hiroshima  1260000
3794  Osaka      JPN  Osaka      2590000
3795  Kyoto      JPN  Kyoto      1475000
```

---

## ✅ SQL Solution

```sql
SELECT *
FROM City
WHERE CountryCode = 'JPN';
```

---

## 🚀 How to Run

1. Run the `setup.sql` to create the `City` table and insert sample data.
2. Run the `solution.sql` query.

### Files:

| File           | Purpose                                    |
|----------------|--------------------------------------------|
| `setup.sql`    | Creates the `City` table and inserts sample data |
| `solution.sql` | Contains the SQL query solution             |
| `README.md`    | Full problem description and solution steps |

---

## 📄 setup.sql

```sql
CREATE TABLE City (
    ID INT,
    Name VARCHAR(100),
    CountryCode VARCHAR(10),
    District VARCHAR(100),
    Population INT
);

INSERT INTO City (ID, Name, CountryCode, District, Population) VALUES
(3793, 'Hiroshima', 'JPN', 'Hiroshima', 1260000),
(3794, 'Osaka', 'JPN', 'Osaka', 2590000),
(3795, 'Kyoto', 'JPN', 'Kyoto', 1475000),
(3796, 'Toronto', 'CAN', 'Ontario', 2800000),
(3797, 'Calgary', 'CAN', 'Alberta', 1200000);
```

---

## 📌 Notes

- Simple WHERE clause filtering based on a specific `CountryCode`.
- Basic example of SELECT * with WHERE condition.
- `setup.sql` ensures reproducibility of the problem.

---

⭐ **Simple but effective exercise to practice filtering data based on categorical columns.**
