# Allow One Function Call (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Write a function `once` that accepts a function `fn` and returns a new function that can be called **at most once**.

The first time the returned function is called, it should return the result of `fn`.  
On subsequent calls, it should return `undefined`.

---

## 🧾 Function Signature

```javascript
function once(fn: Function): Function
```

- `fn` is a function that may take any number of arguments and return any value.
- Returns a new function that wraps `fn`, enforcing that it can only be called once.

---

## 📝 Examples

### Example 1:
```javascript
Input:
fn = (a, b, c) => a + b + c
calls = [[1, 2, 3], [2, 3, 6]]

Output:
[6, undefined]

Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, because it has already been called once
```

---

## 🚧 Constraints

- `0 <= calls.length <= 10`
- `0 <= calls[i].length <= 100`
- `-10⁶ <= calls[i][j] <= 10⁶`

---

## ✅ JavaScript Solution

```javascript
var once = function(fn) {
    let called = false;
    return function(...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
};
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Example Usage:

```javascript
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // Output: 6
console.log(onceFn(2, 3, 6)); // Output: undefined
```

---

## 📌 Notes

- This is a classic **function decorator** pattern.
- Useful in scenarios where initialization or side effects should happen only once.
- Reinforces closure, state tracking, and execution control.

---

⭐ **Include this in your JavaScript repo to showcase mastery of closures and function wrappers.**