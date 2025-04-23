# Select By ID (SQL)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/select-by-id/problem?isFullScreen=true)**

---

## 📖 Problem Description

Write a query to select **all columns** from the `City` table for the record where the `ID` is **1661**.

---

## ✅ SQL Solution

```sql
SELECT *
FROM City
WHERE ID = 1661;
```

---

## 📝 Example

### Example Input:
| ID   | Name     | CountryCode | District     | Population |
|------|----------|-------------|--------------|------------|
| 1660 | Toronto  | CAN         | Ontario      | 2800000    |
| 1661 | Montreal | CAN         | Quebec       | 1700000    |
| 1662 | Calgary  | CAN         | Alberta      | 1200000    |

### Example Output:
```sql
1661  Montreal  CAN  Quebec  1700000
```

---

## 🚀 How to Run

1. Create the `City` table in your SQL environment.
2. Insert test data.
3. Run the `solution.sql` query.

---

## 🗂️ Files in This Folder

| File           | Purpose                              |
|----------------|--------------------------------------|
| `README.md`    | Problem description and solution     |
| `solution.sql` | The SQL query                        |
| `setup.sql` *(optional)* | Table and data for testing |

---

⭐ **Simple filtering exercise using a WHERE clause with equality. Great for SQL newcomers.**