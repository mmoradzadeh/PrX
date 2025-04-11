# Create Hello World Function (JavaScript)

## 📖 Description
This exercise involves creating a JavaScript function named `createHelloWorld`, which returns another function. The returned function must consistently return the string `"Hello World"`, regardless of any input arguments it receives.

---

## 🎯 Problem Statement

Implement the `createHelloWorld()` function with the following characteristics:

- Accepts no parameters.
- Returns a function.
- The returned function always outputs `"Hello World"`, irrespective of any passed arguments.

---

## 📝 Examples

### Example 1:
```javascript
// Input: args = []
// Output: "Hello World"

const f = createHelloWorld();
console.log(f()); // "Hello World"
```
### Example 2:
```javascript
// Input: args = [{}, null, 42]
// Output: "Hello World"

const f = createHelloWorld();
console.log(f({}, null, 42)); // "Hello World"
```