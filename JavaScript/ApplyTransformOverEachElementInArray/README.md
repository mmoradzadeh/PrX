# Apply Transform Over Each Element in Array (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Create a function `map(arr, fn)` which accepts an array of integers and a transformation function. The function applies `fn` to each element and its index and returns a new array containing the results.

### Function Signature:
```javascript
function map(arr: number[], fn: (n: number, i: number) => number): number[]
```

- `arr`: an array of integers
- `fn`: a transformation function that receives the element and its index

The returned array must be a new array and should not mutate the original.

---

## 📝 Examples

### Example 1:
```javascript
Input:
arr = [1, 2, 3]
fn = function plusOne(n) { return n + 1; }

Output: [2, 3, 4]
```

### Example 2:
```javascript
Input:
arr = [1, 2, 3]
fn = function plusIndex(n, i) { return n + i; }

Output: [1, 3, 5]
```

### Example 3:
```javascript
Input:
arr = [10, 20, 30]
fn = function constant() { return 42; }

Output: [42, 42, 42]
```

---

## 🚧 Constraints

- `0 <= arr.length <= 1000`
- `-10⁹ <= arr[i] <= 10⁹`
- The returned array must be a new instance

---

## ✅ JavaScript Solution

```javascript
var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};
```

---

## 🚀 How to Execute

To test the solution:

1. Save the code in a file (e.g., `mapTransform.js`)
2. Run it using Node.js:

```bash
node mapTransform.js
```

### Example usage:

```javascript
function plusIndex(n, i) {
    return n + i;
}

console.log(map([1, 2, 3], plusIndex)); // Output: [1, 3, 5]
```

---

## 💼 Company Tags

This problem helps reinforce:

- Functional programming principles
- Array iteration and transformation
- Callback function usage in JavaScript

---

⭐ **Great for demonstrating mastery over functional array patterns in JavaScript. Add this to your practice repo!**