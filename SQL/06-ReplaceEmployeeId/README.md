# Replace Employee ID With The Unique Identifier (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given two tables:

### `Employees` Table:
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |

- `id` is the primary key of this table.
- `name` is the name of the employee.

### `EmployeeUNI` Table:
| Column Name | Type    |
|-------------|---------|
| id          | int     |
| unique_id   | int     |

- `id` is the primary key of this table.
- `id` is a foreign key to `Employees.id`.

---

## 🎯 Task

Write an SQL query to show the `unique_id`, `name` of all employees. If an employee does **not** have a unique ID, still include their name with `NULL` as `unique_id`.

Return the result table in **any order**.

---

## 📝 Example

### Example Input:
```sql
Employees table:
+----+----------+
| id | name     |
+----+----------+
| 1  | Alice    |
| 7  | Bob      |
| 11 | Meir     |
| 90 | Winston  |
| 3  | Jonathan |
+----+----------+

EmployeeUNI table:
+----+-----------+
| id | unique_id |
+----+-----------+
| 3  | 1         |
| 11 | 2         |
| 90 | 3         |
+----+-----------+
```

### Example Output:
```sql
+-----------+----------+
| unique_id | name     |
+-----------+----------+
| null      | Alice    |
| null      | Bob      |
| 2         | Meir     |
| 3         | Winston  |
| 1         | Jonathan |
+-----------+----------+
```

---

## ✅ SQL Solution

```sql
SELECT eu.unique_id, e.name
FROM Employees e
LEFT JOIN EmployeeUNI eu
ON e.id = eu.id;
```

---

## 🚀 How to Run

To test this query:

1. Create the `Employees` and `EmployeeUNI` tables in your SQL environment.
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

⭐ **This problem reinforces LEFT JOIN usage to include unmatched rows with NULLs. A must-have in your SQL practice set.**