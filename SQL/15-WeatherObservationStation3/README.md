# Weather Observation Station 3 (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/weather-observation-station-3/problem?isFullScreen=true)**

---

## 📖 Problem Description

Query only the `DISTINCT CITY` entries from the `STATION` table.

---

## 📝 Example

### Example Input (STATION table):

| ID   | CITY      | STATE | LAT_N | LONG_W |
|------|-----------|-------|-------|--------|
| 1    | Seattle   | WA    | 47    | 122    |
| 2    | Toronto   | ON    | 43    | 79     |
| 3    | Boston    | MA    | 42    | 71     |
| 4    | Toronto   | ON    | 43    | 79     |

### Example Output:

```text
Seattle
Toronto
Boston
```

---

## ✅ SQL Solution

```sql
SELECT DISTINCT CITY
FROM STATION;
```

---

## 🚀 How to Run

1. Run the `setup.sql` to create the `STATION` table and insert sample data.
2. Run the `solution.sql` query.

---

## 📌 Notes

- Introduces `DISTINCT` keyword to eliminate duplicate rows.
- Basic query for selecting unique values.

---

⭐ **Great practice for understanding DISTINCT and column selection in SQL.**
