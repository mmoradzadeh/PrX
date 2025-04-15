# Array Reduce Transformation (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a function `reduce` that applies a reducer function over an array to reduce it to a single value. This function mimics the behavior of the native `Array.prototype.reduce` in JavaScript.

---

## 🧾 Function Signature

```javascript
function reduce(
  nums: number[],
  fn: (accum: number, curr: number, i: number) => number,
  init: number
): number
```

- `nums`: Array of integers
- `fn`: Reducer function applied to each element. It receives:
  - `accum`: accumulated result so far
  - `curr`: current element
  - `i`: current index
- `init`: Initial value of the accumulator

---

## 📝 Examples

### Example 1:
```javascript
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

Output: 10
```

### Example 2:
```javascript
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

Output: 130
```

### Example 3:
```javascript
Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

Output: 25
```

---

## 🚧 Constraints

- `0 <= nums.length <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`
- The returned value must be a number

---

## ✅ JavaScript Solution

```javascript
var reduce = function(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i], i);
    }
    return result;
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
function sum(accum, curr) {
    return accum + curr;
}

console.log(reduce([1, 2, 3, 4], sum, 0)); // Output: 10
```

---

## 📌 Notes

- Great for demonstrating understanding of accumulation patterns, higher-order functions, and functional programming in JavaScript.
- Mimics the behavior of `Array.prototype.reduce`.

---

⭐ **Include this in your JavaScript portfolio to highlight functional thinking and custom implementation of native methods.**