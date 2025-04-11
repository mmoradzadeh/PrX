# Counter Function (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Implement a function named `createCounter(n)` that returns another function. This returned function, when invoked, returns the current value of the counter and then increments the counter by one.

### Behavior:

- On each invocation, the counter returns its current value and increments itself by `1`.
- The initial value of the counter is provided when creating it.

---

## 🎯 Examples

**Example 1:**
```javascript
Input:
n = 10
["call","call","call"]

Output:
[10, 11, 12]

Explanation:
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
```

**Example 2:**
```javascript
Input:
n = -2
["call","call","call","call","call"]

Output:
[-2, -1, 0, 1, 2]

Explanation:
const counter = createCounter(-2);
counter(); // -2
counter(); // -1
counter(); // 0
counter(); // 1
counter(); // 2
```
🚧 Constraints

-1000 <= n <= 1000

At most 1000 calls to counter().

