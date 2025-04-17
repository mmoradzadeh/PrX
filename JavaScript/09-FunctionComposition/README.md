# Function Composition (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a function `compose` that takes an array of functions `functions` and returns a new function that is the composition of those functions.

The returned function should apply each function in the array from **right to left** (i.e., `compose([f, g, h])(x)` is the same as `f(g(h(x)))`).

---

## 🧾 Function Signature

```javascript
function compose(functions: Function[]): Function
```

- `functions`: an array of unary functions (each accepts one number and returns one number)
- Returns a new function that takes a single number and applies the composed functions to it

---

## 📝 Examples

### Example 1:
```javascript
Input:
functions = [x => x + 1, x => x * x, x => 2 * x]
Output:
compose(functions)(4) // 65
Explanation:
compose([f1, f2, f3])(4) = f1(f2(f3(4))) = (4 * 2) = 8 → 8^2 = 64 → 64 + 1 = 65
```

### Example 2:
```javascript
Input:
functions = []
Output:
compose(functions)(42) // 42
Explanation:
Empty function list should return the input unchanged.
```

---

## 🚧 Constraints

- `0 <= functions.length <= 1000`
- All functions are valid JavaScript functions and return numbers
- Input to the returned function is a single number

---

## ✅ JavaScript Solution

```javascript
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run it with Node.js:

```bash
node solution.js
```

### Example Usage:

```javascript
const functions = [
    x => x + 1,
    x => x * x,
    x => 2 * x
];

const composed = compose(functions);
console.log(composed(4)); // Output: 65
```

---

## 📌 Notes

- This problem reinforces functional programming principles and the concept of function composition.
- Understanding function order (`right to left`) is key to solving it correctly.

---

⭐ **Add this to your practice repo to showcase your understanding of higher-order functions and functional logic in JavaScript.**