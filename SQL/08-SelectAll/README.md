# Select All (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/select-all-sql/problem?isFullScreen=true)**

---

## 📖 Problem Description

Write a query to select **all columns** (`*`) for **all records** from the `City` table.

This is a basic warm-up problem focused on using the `SELECT` statement with no filtering or conditions.

---

## ✅ SQL Solution

```sql
SELECT *
FROM City;
```

---

## 📝 Example

### Example Input:
| ID | Name      | CountryCode | District | Population |
|----|-----------|-------------|----------|------------|
| 1  | Kabul     | AFG         | Kabol    | 1780000    |
| 2  | Amsterdam | NLD         | Noord    | 731200     |

### Example Output:
```sql
1  Kabul     AFG  Kabol     1780000
2  Amsterdam NLD  Noord     731200
```

---

## 🚀 How to Run

1. Create the `City` table in your SQL environment.
2. Insert test records (optional).
3. Run the `solution.sql` query.

---

## 🗂️ Files in This Folder

| File           | Purpose                               |
|----------------|---------------------------------------|
| `README.md`    | Problem description and solution      |
| `solution.sql` | The SQL query                         |
| `setup.sql` *(optional)* | Table and data for testing  |

---

⭐ **A perfect first step into SQL querying, teaching how to select all rows and columns from a table.**
