# Sleep (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a `sleep` function that accepts a number `millis` and returns a `Promise`.  
The `Promise` should resolve after at least `millis` milliseconds have passed.

---

## 🧾 Function Signature

```javascript
async function sleep(millis: number): Promise<void>
```

---

## 📝 Example

### Example Input:
```javascript
sleep(100).then(() => console.log(Date.now() - t));
```

### Example Output:
```text
Approximately 100 (milliseconds)
```

---

## ✅ JavaScript Solution

```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(() => {
        resolve();
    }, millis));
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
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Output: ~100 ms
```

---

## 📌 Notes

- Demonstrates asynchronous programming and **Promise-based delay** in JavaScript.
- Common utility function used in testing, animations, and rate limiting.

---

⭐ **A great example of applying Promises to build a delay mechanism in async code.**
