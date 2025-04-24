# Simple Array Sum (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given an array of integers, find the **sum of its elements**.

### Function Signature:
```javascript
function simpleArraySum(ar: number[]): number
```

---

## 📝 Input Format

- The first line contains an integer `n`, the size of the array.
- The second line contains `n` space-separated integers representing the array `ar`.

---

## 🧾 Example

### Example Input:
```text
6
1 2 3 4 10 11
```

### Example Output:
```text
31
```

---

## ✅ JavaScript Solution

```javascript
function simpleArraySum(ar) {
    return ar.reduce((acc, val) => acc + val, 0);
}
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run it with Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const ar = [1, 2, 3, 4, 10, 11];
console.log(simpleArraySum(ar)); // Output: 31
```

---

## 📌 Notes

- Demonstrates usage of array traversal and accumulation using `.reduce()`.
- A great warm-up for basic array and functional programming concepts.

---

⭐ **Add this to your JavaScript repo as an early test of array handling and reducer logic.**
