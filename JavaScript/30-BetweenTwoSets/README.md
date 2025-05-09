# Between Two Sets (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true)**

---

## 📖 Problem Description

You are given two arrays of integers, `a` and `b`. A number `x` is considered **between the two sets** if:

1. Every element in array `a` is a **factor of** `x`
2. `x` is a **factor of** every element in array `b`

Count how many integers satisfy both conditions.

---

## 🧾 Function Signature

```javascript
function getTotalX(a: number[], b: number[]): number
```

- `a`: first array of integers
- `b`: second array of integers

---

## 📝 Example

### Example Input:
```javascript
a = [2, 4]
b = [16, 32, 96]
```

### Example Output:
```text
3
```

### Explanation:

The integers that satisfy the conditions are: **4, 8, 16**.

---

## ✅ JavaScript Solution

```javascript
function getTotalX(a, b) {
    const lcm = (x, y) => x * y / gcd(x, y);
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);

    const lcmA = a.reduce((acc, val) => lcm(acc, val));
    const gcdB = b.reduce((acc, val) => gcd(acc, val));

    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) count++;
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
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b)); // Output: 3
```

---

## 📌 Notes

- This is a classic problem in number theory involving **LCM** and **GCD**.
- Avoid brute force by reducing the search range using LCM(a) and GCD(b).

---

⭐ **Great for demonstrating math optimization using Least Common Multiple and Greatest Common Divisor.**
