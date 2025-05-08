# Kangaroo (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true)**

---

## 📖 Problem Description

You are given the starting positions and jump distances for two kangaroos. Determine whether they will land on the **same position at the same time** after making the same number of jumps.

Return `"YES"` if they will meet; otherwise, return `"NO"`.

---

## 🧾 Function Signature

```javascript
function kangaroo(x1: number, v1: number, x2: number, v2: number): string
```

- `x1`: starting position of kangaroo 1  
- `v1`: jump distance per jump for kangaroo 1  
- `x2`: starting position of kangaroo 2  
- `v2`: jump distance per jump for kangaroo 2

---

## 📝 Example

### Example Input:
```javascript
x1 = 0, v1 = 3
x2 = 4, v2 = 2
```

### Example Output:
```text
YES
```

### Explanation:
After 4 jumps:  
- Kangaroo 1: 0 + 4×3 = 12  
- Kangaroo 2: 4 + 4×2 = 12  
They land at the same spot.

---

## ✅ JavaScript Solution

```javascript
function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    const n = (x2 - x1) / (v1 - v2);
    return (n >= 0 && Number.isInteger(n)) ? "YES" : "NO";
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
console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
```

---

## 📌 Notes

- Tests understanding of algebra, loops, and integer division.
- Elegant when solved algebraically — avoid brute force loops.

---

⭐ **Ideal problem to showcase math-based reasoning over brute-force solutions.**
