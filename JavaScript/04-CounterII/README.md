# Counter II (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript)**

---

## 📖 Problem Description

Create a function `createCounter` that accepts an initial number `init`. It should return an object with the following three methods:

- **`increment()`**  
  Increases the internal value by `1` and returns the updated value.

- **`decrement()`**  
  Decreases the internal value by `1` and returns the updated value.

- **`reset()`**  
  Resets the internal value to the original `init` value and returns it.

---

## 📝 Examples

### Example 1:
```javascript
const counter = createCounter(5);
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4
```
🚧 Constraints

	•	-1000 <= init <= 1000
	•	Total calls to functions ≤ 1000