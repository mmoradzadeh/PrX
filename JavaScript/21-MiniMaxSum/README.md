# Mini-Max Sum (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given **five positive integers**, find the **minimum** and **maximum** values that can be calculated by summing exactly four of the five integers.

Then print the respective minimum and maximum values as a single line of two space-separated integers.

---

## 🧾 Function Signature

```javascript
function miniMaxSum(arr: number[]): void
```

- `arr`: An array of 5 positive integers

---

## 📝 Example

### Example Input:
```javascript
arr = [1, 2, 3, 4, 5]
```

### Example Output:
```text
10 14
```

### Explanation:
- Minimum sum = 1 + 2 + 3 + 4 = 10
- Maximum sum = 2 + 3 + 4 + 5 = 14

---

## ✅ JavaScript Solution

```javascript
function miniMaxSum(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(`${total - max} ${total - min}`);
}
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run it using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // Expected Output: 10 14
```

---

## 📌 Notes

- This problem is ideal for understanding array operations, aggregation, and the use of `Math.min`/`Math.max`.
- You must handle large numbers properly (e.g. with `Number` limits in JavaScript).

---

⭐ **A foundational HackerRank problem that tests array logic, sum
