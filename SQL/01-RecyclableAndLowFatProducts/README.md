# Recyclable and Low Fat Products (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/recyclable-and-low-fat-products/description/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given a table named `Products` with the following schema:

| Column Name | Type    |
|-------------|---------|
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |

- `product_id` is the primary key of this table.
- `low_fats` is an ENUM ('Y', 'N') where 'Y' means low fat.
- `recyclable` is an ENUM ('Y', 'N') where 'Y' means recyclable.

---

## 🎯 Task

Write an SQL query to find the IDs of products that are both low fat and recyclable.

Return the result table in **any order**.

---

## 📝 Example

### Example Input:
```sql
Products table:
+-------------+----------+-------------+
| product_id  | low_fats | recyclable  |
+-------------+----------+-------------+
| 0           | Y        | N           |
| 1           | Y        | Y           |
| 2           | N        | Y           |
| 3           | Y        | Y           |
| 4           | N        | N           |
+-------------+----------+-------------+
```

### Example Output:
```sql
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
```

---

## ✅ SQL Solution

```sql
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```

---

## 🚀 How to Run the Query

To test this query:

1. Create the `Products` table in your SQL environment.
2. Insert the sample data.
3. Run the above `SELECT` query.

Example test setup:

```sql
CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    low_fats ENUM('Y', 'N'),
    recyclable ENUM('Y', 'N')
);

INSERT INTO Products (product_id, low_fats, recyclable) VALUES
(0, 'Y', 'N'),
(1, 'Y', 'Y'),
(2, 'N', 'Y'),
(3, 'Y', 'Y'),
(4, 'N', 'N');
```

---

## 📌 Notes

- This is a basic filtering task using the `WHERE` clause with multiple conditions.
- Ideal for demonstrating your grasp of logical operators and conditional selection in SQL.

---

⭐ **Showcase this in your SQL practice repo to highlight foundational filtering skills!**