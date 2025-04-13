# To Be Or Not To Be (JavaScript)

🔗 **[LeetCode Problem Link](https://leetcode.com/problems/to-be-or-not-to-be/)**

---

## 📖 Problem Description

Create a function `expect` that accepts a value and returns an object with two methods:

- **`toBe(val)`**  
  Returns `{ value: true }` if the input value is strictly equal (`===`) to the original.  
  Otherwise, throws an error: `"Not Equal"`.

- **`notToBe(val)`**  
  Returns `{ value: true }` if the input value is not strictly equal (`!==`) to the original.  
  Otherwise, throws an error: `"Equal"`.

---

## 📝 Examples

### Example 1:
```javascript
const func = () => expect(5).toBe(5);
// Output: { value: true }
```
### Example 2:
```javascript
const func = () => expect(5).toBe(null);
// Throws: Error("Not Equal")
```
### Example 3:
```javascript
const func = () => expect(5).notToBe(null);
// Output: { value: true }
```

🚧 Constraints

	•	Any data type may be passed into expect() and compared.
	•	Only strict equality (===) or inequality (!==) is used.
	•	Must throw exactly "Not Equal" or "Equal" when conditions fail.