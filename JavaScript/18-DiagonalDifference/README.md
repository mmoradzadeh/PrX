# Diagonal Difference (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given a square matrix, calculate the **absolute difference** between the sums of its diagonals.

### Primary Diagonal
- Top-left to bottom-right.

### Secondary Diagonal
- Top-right to bottom-left.

---

## 🧾 Function Signature

```javascript
function diagonalDifference(arr: number[][]): number
```

- `arr`: a 2D array of integers representing the square matrix.

---

## 📝 Example

### Example Input:
```javascript
arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
```

### Example Output:
```text
15
```

### Explanation:

- Primary diagonal: 11 + 5 + (-12) = **4**
- Secondary diagonal: 4 + 5 + 10 = **19**
- Absolute difference: |4 - 19| = **15**

---

## ✅ JavaScript Solution

```javascript
function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - i - 1];
    }

    return Math.abs(primarySum - secondarySum);
}
```

---

## 🚀 How to Execute

1. Save the code in a file called `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
console.log(diagonalDifference(arr)); // Output: 15
```

---

## 📌 Notes

- Important exercise for mastering nested arrays (2D arrays) and index manipulation.
- Reinforces matrix traversal concepts.

---

⭐ **A classic HackerRank problem — add it to your repo to show skill with matrix operations and indexing.**
