# Invalid Tweets (SQL)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/invalid-tweets/description/?envType=study-plan-v2&envId=top-sql-50)**

---

## 📖 Problem Description

You are given a table named `Tweets` with the following schema:

| Column Name | Type    |
|-------------|---------|
| tweet_id    | int     |
| content     | varchar |

- `tweet_id` is the primary key of this table.
- `content` contains the text of the tweet.

Write an SQL query to report the IDs of tweets that have **more than 15 characters**.

---

## 📝 Example

### Example Input:
```sql
Tweets table:
+----------+------------------------------+
| tweet_id | content                      |
+----------+------------------------------+
| 1        | Vote for Biden               |
| 2        | Let us make America great!  |
| 3        | Thank you                   |
| 4        | Stay safe. Stay strong.     |
+----------+------------------------------+
```

### Example Output:
```sql
+----------+
| tweet_id |
+----------+
| 2        |
| 4        |
+----------+
```

---

## ✅ SQL Solution

```sql
SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 15;
```

---

## 🚀 How to Run

To test this query:

1. Create the `Tweets` table in your SQL environment.
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

⭐ **Quick exercise on string length filtering — great for practicing basic conditional queries.**