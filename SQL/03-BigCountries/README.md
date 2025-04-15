# Big Countries (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/big-countries/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given a table named `World` with the following schema:

| Column Name | Type    |
|-------------|---------|
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |

A country is considered **big** if:
- It has an **area of at least 3,000,000**, or
- It has a **population of at least 25,000,000**.

Write an SQL query to output the **name**, **population**, and **area** of the big countries.

---

## 📝 Example

### Example Input:
```sql
World table:
+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
```

### Example Output:
```sql
+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
```

---

## ✅ SQL Solution

```sql
SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;
```

---

## 🚀 How to Run

To test this query:

1. Create the `World` table in your SQL environment.
2. Insert the sample data provided.
3. Run the `solution.sql` query.

---

## 🗂️ Files in This Folder

| File          | Purpose                                |
|---------------|----------------------------------------|
| `README.md`   | Full problem description and solution  |
| `solution.sql`| Contains only the SQL query            |
| `setup.sql` *(optional)* | Table structure + sample data |

---

⭐ **A great SQL exercise for practicing conditional filtering using OR operators. Add this to your SQL showcase!**