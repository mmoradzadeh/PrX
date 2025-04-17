# Return Length of Arguments Passed (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Write a function `argumentsLength` that returns the number of arguments passed to it.

---

## 🧾 Function Signature

```javascript
function argumentsLength(...args): number
```

- `args`: A rest parameter representing all arguments passed to the function.
- Returns the number of arguments passed.

---

## 📝 Examples

### Example 1:
```javascript
Input: argumentsLength(5)
Output: 1
```

### Example 2:
```javascript
Input: argumentsLength(1, 2, 3)
Output: 3
```

---

## 🚧 Constraints

- `0 <= args.length <= 100`

---

## ✅ JavaScript Solution

```javascript
var argumentsLength = function(...args) {
    return args.length;
};
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run it using Node.js:

```bash
node solution.js
```

### Example Usage:

```javascript
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength());       // Output: 0
console.log(argumentsLength(42));     // Output: 1
```

---

## 📌 Notes

- This is a great example of how to use **rest parameters** in JavaScript functions.
- Helps demonstrate your understanding of handling arbitrary argument lengths in modern JavaScript.

---

⭐ **Add this to your portfolio as a clean example of rest parameter usage.**