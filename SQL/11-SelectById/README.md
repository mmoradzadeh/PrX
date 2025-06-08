# Select By ID (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/select-by-id/problem?isFullScreen=true)**

---

## 📖 Problem Description

Write a query to select **all columns** from the `City` table for the row where the `ID` is **1661**.

---

## 📝 Example

### Example Input (City table):

| ID   | Name     | CountryCode | District     | Population |
|------|----------|-------------|--------------|------------|
| 1660 | Toronto  | CAN         | Ontario      | 2800000    |
| 1661 | Montreal | CAN         | Quebec       | 1700000    |
| 1662 | Calgary  | CAN         | Alberta      | 1200000    |

### Example Output:

```text
1661  Montreal  CAN  Quebec  1700000
```

---

## ✅ SQL Solution

```sql
SELECT *
FROM City
WHERE ID = 1661;
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
(1660, 'Toronto', 'CAN', 'Ontario', 2800000),
(1661, 'Montreal', 'CAN', 'Quebec', 1700000),
(1662, 'Calgary', 'CAN', 'Alberta', 1200000);
```

---

## 📌 Notes

- Simple WHERE clause filtering based on primary key.
- Basic warm-up SQL query.
- Having `setup.sql` ensures anyone can recreate and test the problem locally.

---

⭐ **Foundational SQL query — useful first test of SELECT and WHERE usage with table setup included.**
