# Weather Observation Station 1 (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/weather-observation-station-1/problem?isFullScreen=true)**

---

## 📖 Problem Description

Query **all columns** (attributes) for every row in the `STATION` table.

---

## 📝 Example

### Example Input (STATION table):

| ID   | CITY      | STATE | LAT_N | LONG_W |
|------|-----------|-------|-------|--------|
| 1    | Seattle   | WA    | 47    | 122    |
| 2    | Toronto   | ON    | 43    | 79     |
| 3    | Boston    | MA    | 42    | 71     |

### Example Output:

```text
1 Seattle   WA 47 122
2 Toronto   ON 43 79
3 Boston    MA 42 71
```

---

## ✅ SQL Solution

```sql
SELECT *
FROM STATION;
```

---

## 🚀 How to Run

1. Run the `setup.sql` to create the `STATION` table and insert sample data.
2. Run the `solution.sql` query.

---

## 📌 Notes

- Simple full table scan with `SELECT *`.
- First test of reading an entire table.

---

⭐ **Introductory SQL query — great for practicing full table selection.**
