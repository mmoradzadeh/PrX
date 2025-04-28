# Plus Minus (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given an array of integers, calculate the **ratios** of:
- Positive numbers
- Negative numbers
- Zeros

Print each ratio on a new line with **6 decimal places** of precision.

---

## 🧾 Function Signature

```javascript
function plusMinus(arr: number[]): void
```

- `arr`: An array of integers.

---

## 📝 Example

### Example Input:
```javascript
arr = [-4, 3, -9, 0, 4, 1]
```

### Example Output:
```text
0.500000
0.333333
0.166667
```

### Explanation:

- 3 positive numbers → 3/6 = 0.500000
- 2 negative numbers → 2/6 = 0.333333
- 1 zero → 1/6 = 0.166667

---

## ✅ JavaScript Solution

```javascript
function plusMinus(arr) {
    const n = arr.length;
    let positive = 0, negative = 0, zero = 0;

    for (const num of arr) {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    }

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
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
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

// Expected Output:
// 0.500000
// 0.333333
// 0.166667
```

---

## 📌 Notes

- This problem tests array traversal and the use of floating-point arithmetic with precision formatting.
- Use `.toFixed(6)` for ensuring 6 decimal places in output.

---

⭐ **Perfect for practicing counting logic and precision formatting in JavaScript.**