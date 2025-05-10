# The Birthday Bar (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given a list of integers representing a chocolate bar, and two integers `d` and `m`:

- `d` is the birth day (target sum)
- `m` is the birth month (number of pieces to consider)

Determine how many contiguous subarrays of length `m` sum to `d`.

---

## 🧾 Function Signature

```javascript
function birthday(s: number[], d: number, m: number): number
```

- `s`: array of integers representing the chocolate bar
- `d`: target sum (birth day)
- `m`: number of elements to consider (birth month)

---

## 📝 Example

### Example Input:
```javascript
s = [1, 2, 1, 3, 2]
d = 3
m = 2
```

### Example Output:
```text
2
```

### Explanation:

- [1, 2] → sum = 3 ✅  
- [2, 1] → sum = 3 ✅  
- [1, 3] → sum = 4 ❌  
- [3, 2] → sum = 5 ❌

→ 2 valid segments.

---

## ✅ JavaScript Solution

```javascript
function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        const segment = s.slice(i, i + m);
        const sum = segment.reduce((a, b) => a + b, 0);
        if (sum === d) count++;
    }
    return count;
}
```

---

## 🚀 How to Execute

1. Save the code in `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 2
```

---

## 📌 Notes

- Classic sliding window use-case.
- Emphasizes array traversal, subarray summing, and logic accuracy.

---

⭐ **Solid challenge to demonstrate control over subarrays and functional programming techniques like `.slice()` and `.reduce()`.**
