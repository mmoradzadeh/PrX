# Memoize (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a function `memoize(fn)` that takes a function `fn` and returns a **memoized version** of that function.

The memoized function:
- Should return cached results when the same inputs have been passed before.
- Should invoke the original function only if the arguments differ from previous calls.

---

## 🧾 Function Signature

```javascript
function memoize(fn: Function): Function
```

- `fn`: A pure function that takes any number of arguments and returns a number.
- Returns a new function that caches results based on arguments.

---

## 📝 Examples

### Example:
```javascript
Input:
fn = (a, b) => a + b
calls = [[2, 3], [2, 3], [1, 2]]

Output:
[5, 5, 3]

Explanation:
- The first call computes 2 + 3 = 5 and caches the result.
- The second call returns the cached result for [2, 3].
- The third call computes 1 + 2 = 3 and caches it.
```

---

## 🚧 Constraints

- `0 <= calls.length <= 10⁵`
- `0 <= calls[i].length <= 5`
- `-10⁶ <= calls[i][j] <= 10⁶`
- The return value of `fn` is always a number.

---

## ✅ JavaScript Solution

```javascript
var memoize = function(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run with Node.js:

```bash
node solution.js
```

### Example Usage:

```javascript
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 3)); // 5
console.log(memoizedSum(2, 3)); // 5 (from cache)
console.log(memoizedSum(1, 2)); // 3
```

---

## 📌 Notes

- Demonstrates mastery of closures, function caching, and performance optimization.
- Used commonly in frontend frameworks and high-performance computing scenarios.

---

⭐ **Add this to your JavaScript repo to showcase understanding of memoization and optimization strategies.**