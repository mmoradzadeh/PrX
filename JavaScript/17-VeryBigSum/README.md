# A Very Big Sum (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true)**

---

## 📖 Problem Description

You are given an array of integers representing **very large numbers**. Calculate and return the **sum of all elements** in the array.

---

## 🧾 Function Signature

```javascript
function aVeryBigSum(ar: number[]): number
```

- `ar` — an array of integers (`1 <= ar[i] <= 10¹⁰`)

---

## 📝 Example

### Example Input:
```javascript
ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
```

### Example Output:
```text
5000000015
```

---

## ✅ JavaScript Solution

```javascript
function aVeryBigSum(ar) {
    return ar.reduce((acc, val) => acc + val, 0);
}
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(ar)); // Output: 5000000015
```

---

## 📌 Notes

- This is very similar to the Simple Array Sum problem but involves much larger integers.
- JavaScript can handle very large numbers safely up to 2⁵³−1 (`Number.MAX_SAFE_INTEGER`).

---

⭐ **Add this to your JavaScript repo to showcase summing large datasets efficiently with `.reduce()`.**
