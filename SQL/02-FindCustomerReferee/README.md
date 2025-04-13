# Find Customer Referee (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/find-customer-referee/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given a table named `Customer` with the following schema:

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
| referee_id  | int     |

- `id` is the primary key column.
- `name` is the name of the customer.
- `referee_id` is the id of the customer who referred this customer.

Write an SQL query to report the names of customers who are **not referred by the customer with id = 2**.

Return the result table in **any order**.

---

## 📝 Example

### Example Input:
```sql
Customer table:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
```

### Example Output:
```sql
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```

---

## ✅ SQL Solution

```sql
SELECT name
FROM Customer
WHERE referee_id != 2 OR referee_id IS NULL;
```

---

## 🚀 How to Run

To test this query:

1. Create the `Customer` table in your SQL environment.
2. Insert the sample data provided.
3. Run the `solution.sql` query.

---

## 🗂️ Files in This Folder

| File         | Purpose                              |
|--------------|--------------------------------------|
| `README.md`  | Full problem description and solution |
| `solution.sql` | Contains only the SQL query         |
| `setup.sql` *(optional)* | Table structure + sample data |

---

⭐ **Add this to your repo to demonstrate logical filtering using NULL and inequality conditions in SQL!**