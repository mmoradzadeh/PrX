# Product Sales Analysis I (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/product-sales-analysis-i/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given two tables:

### `Product` Table:
| Column Name  | Type    |
|--------------|---------|
| product_id   | int     |
| product_name | varchar |

- `product_id` is the primary key of this table.

### `Sales` Table:
| Column Name | Type    |
|-------------|---------|
| sale_id     | int     |
| product_id  | int     |
| year        | int     |
| quantity    | int     |
| price       | int     |

- `sale_id` is the primary key of this table.
- `product_id` is a foreign key to `Product.product_id`.

---

## 🎯 Task

Write an SQL query to report:
- `product_name`
- `year`
- `price`

from the `Sales` table.

Return the result table ordered **however** (no specific order required).

---

## 📝 Example

### Example Input:

**Product table:**
| product_id | product_name |
|------------|--------------|
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |

**Sales table:**
| sale_id | product_id | year | quantity | price |
|---------|------------|------|----------|-------|
| 1       | 100        | 2008 | 10       | 500   |
| 2       | 100        | 2009 | 12       | 450   |
| 7       | 200        | 2011 | 15       | 700   |

### Example Output:

| product_name | year | price |
|--------------|------|-------|
| Nokia        | 2008 | 500   |
| Nokia        | 2009 | 450   |
| Apple        | 2011 | 700   |

---

## ✅ SQL Solution

```sql
SELECT product_name, year, price
FROM Sales s
INNER JOIN Product p ON s.product_id = p.product_id;
```

---

## 🚀 How to Run

1. Create the `Product` and `Sales` tables in your SQL environment.
2. Insert the sample data provided.
3. Run the `solution.sql` query.

---

## 🗂️ Files in This Folder

| File           | Purpose                                |
|----------------|----------------------------------------|
| `README.md`    | Full problem description and solution  |
| `solution.sql` | Contains only the SQL query            |
| `setup.sql` *(optional)* | Table structure + sample data |

---

⭐ **A great exercise for practicing simple JOIN operations between two tables.**
