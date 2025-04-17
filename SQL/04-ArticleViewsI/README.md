# Article Views I (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/article-views-i/description/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given a table named `Views` with the following schema:

| Column Name | Type    |
|-------------|---------|
| article_id  | int     |
| author_id   | int     |
| viewer_id   | int     |
| view_date   | date    |

- This table has no primary key and may contain duplicate rows.
- Each row indicates that the viewer with `viewer_id` viewed the article `article_id`, which was written by `author_id` on `view_date`.

---

## 🎯 Task

Write a query to find the IDs of authors who viewed their own articles.  
Return the result table ordered by `id` in **ascending order**.

---

## 📝 Example

### Example Input:
```sql
Views table:
+------------+-----------+------------+------------+
| article_id | author_id | viewer_id  | view_date  |
+------------+-----------+------------+------------+
| 1          | 3         | 5          | 2021-07-01 |
| 1          | 3         | 6          | 2021-07-02 |
| 2          | 7         | 7          | 2021-07-01 |
| 2          | 7         | 6          | 2021-07-02 |
| 4          | 7         | 1          | 2021-07-03 |
| 3          | 4         | 4          | 2021-07-02 |
+------------+-----------+------------+------------+
```

### Example Output:
```sql
+----+
| id |
+----+
| 4  |
| 7  |
+----+
```

---

## ✅ SQL Solution

```sql
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id;
```

---

## 🚀 How to Run

To test this query:

1. Create the `Views` table in your SQL environment.
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

⭐ **A great example of using self-matching conditions and DISTINCT in SQL. Perfect for filtering logic practice.**