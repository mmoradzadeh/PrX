# Revising the Select Query (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/revising-the-select-query/problem?isFullScreen=true)**

---

## 📖 Problem Description

Query all columns (`*`) for all records in the `City` table where the **population is greater than 100,000**.

Return all matching rows and all columns.

---

## 🎯 Task

Write an SQL query to select all columns from rows in the `City` table where `population > 100000`.

---

## 📝 Example

### Example Input:
Suppose the `City` table looks like:

| ID | Name      | CountryCode | District | Population |
|----|-----------|-------------|----------|------------|
| 1  | Kabul     | AFG         | Kabol    | 1780000    |
| 2  | Qandahar  | AFG         | Qandahar | 237500     |
| 3  | Herat     | AFG         | Herat    | 186800     |
| 4  | Mazar     | AFG         | Balkh    | 127800     |
| 5  | Amsterdam | NLD         | Noord    | 731200     |
| 6  | Utrecht   | NLD         | Utrecht  | 234323     |

### Example Output:
```sql
1  Kabul     AFG  Kabol     1780000
2  Qandahar  AFG  Qandahar   237500
3  Herat     AFG  Herat      186800
4  Mazar     AFG  Balkh      127800
5  Amsterdam NLD  Noord      731200
6  Utrecht   NLD  Utrecht    234323
```

---

## ✅ SQL Solution

```sql
SELECT *
FROM City
WHERE population > 100000;
```

---

## 🚀 How to Run

1. Create the `City` table in your SQL environment.
2. Insert sample data (if testing).
3. Run the `solution.sql` file.

---

## 🗂️ Files in This Folder

| File          | Purpose                                |
|---------------|----------------------------------------|
| `README.md`   | Full problem description and solution  |
| `solution.sql`| Contains only the SQL query            |
| `setup.sql` *(optional)* | Table structure + sample data |

---

⭐ **Perfect warm-up for filtering and basic query syntax using the `WHERE` clause.**
