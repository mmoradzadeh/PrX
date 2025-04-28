# Staircase (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true)**

---

## 📖 Problem Description

Write a program that prints a **right-aligned staircase** of size `n`.

Each line must contain spaces and `#` symbols to form the staircase shape.

---

## 🧾 Function Signature

```javascript
function staircase(n: number): void
```

- `n`: An integer representing the size of the staircase.

---

## 📝 Example

### Example Input:
```text
n = 4
```

### Example Output:
```text
   #
  ##
 ###
####
```

---

## ✅ JavaScript Solution

```javascript
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
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
staircase(4);

// Expected Output:
//    #
//   ##
//  ###
// ####
```

---

## 📌 Notes

- Focuses on string manipulation and controlling spacing properly.
- Useful for practicing nested loops, `.repeat()`, and output formatting in JavaScript.

---

⭐ **Great for demonstrating mastery over simple loops, string generation, and pattern building.**