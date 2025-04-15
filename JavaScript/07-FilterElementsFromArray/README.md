# Filter Elements from Array (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a function `filter` that takes an array `arr` and a callback function `fn`. The function returns a **new array** containing only the elements for which `fn(element, index)` returns `true`.

---

## 🧾 Function Signature

```javascript
function filter(arr: number[], fn: (n: number, i: number) => boolean): number[]
```

- `arr`: An array of integers.
- `fn`: A callback that takes the current element and its index and returns `true` or `false`.

Return a **new array** — do not modify the original.

---

## 📝 Examples

### Example 1:
```javascript
Input:
arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10; }

Output: [20, 30]
```

### Example 2:
```javascript
Input:
arr = [1, 2, 3]
fn = function firstIndex(n, i) { return i === 0; }

Output: [1]
```

### Example 3:
```javascript
Input:
arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) { return n + 1; }

Output: [-2, 0, 1, 2]
```

---

## 🚧 Constraints

- `0 <= arr.length <= 1000`
- `-10⁹ <= arr[i] <= 10⁹`

---

## ✅ JavaScript Solution

```javascript
var filter = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
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
function greaterThan10(n) {
    return n > 10;
}

console.log(filter([0, 10, 20, 30], greaterThan10)); // Output: [20, 30]
```

---

## 📌 Notes

- Demonstrates use of callback functions
- Great for showcasing control flow and higher-order function skills in JavaScript

---

⭐ **Include this in your JavaScript portfolio to demonstrate custom filter logic with callback functions.**