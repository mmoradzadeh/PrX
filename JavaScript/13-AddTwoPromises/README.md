# Add Two Promises (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Write an asynchronous function `addTwoPromises` that accepts two promise-returning functions and returns a new Promise. The resulting Promise should resolve with the **sum of the resolved values** from the two input Promises.

---

## 🧾 Function Signature

```javascript
async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number>
```

- Both inputs are Promises that resolve to numbers.
- Return a new Promise that resolves to the sum of the two resolved values.

---

## 📝 Examples

### Example:
```javascript
Input:
promise1 = Promise.resolve(2)
promise2 = Promise.resolve(5)

Output:
7
```

---

## 🚧 Constraints

- Both promises will resolve to a number.
- `0 <= a, b <= 10⁶`

---

## ✅ JavaScript Solution

```javascript
var addTwoPromises = async function(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
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
const promise1 = Promise.resolve(2);
const promise2 = Promise.resolve(5);

addTwoPromises(promise1, promise2).then(console.log); // Output: 7
```

---

## 📌 Notes

- This problem tests your understanding of `async/await` and how to work with multiple Promises concurrently.
- `Promise.all()` is used for efficiency, as it allows both Promises to run in parallel.

---

⭐ **Add this to your JavaScript repo to demonstrate practical usage of asynchronous operations and Promise combinators.**