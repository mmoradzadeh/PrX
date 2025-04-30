# Birthday Cake Candles (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true)**

---

## 📖 Problem Description

You are in charge of the cake for a child's birthday. The cake has candles that are **tall**. Each candle has a height. You can only blow out the **tallest candles**.

### Task:
Count how many candles are tallest and return that number.

---

## 🧾 Function Signature

```javascript
function birthdayCakeCandles(candles: number[]): number
```

- `candles`: An array of integers representing candle heights.

---

## 📝 Example

### Example Input:
```javascript
candles = [3, 2, 1, 3]
```

### Example Output:
```text
2
```

### Explanation:
- Tallest candle height = 3
- There are 2 candles of height 3

---

## ✅ JavaScript Solution

```javascript
function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    return candles.filter(c => c === max).length;
}
```

---

## 🚀 How to Execute

1. Save the code in a file called `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles)); // Output: 2
```

---

## 📌 Notes

- Excellent practice for array traversal and filtering.
- Demonstrates usage of `Math.max` and `.filter()` together effectively.

---

⭐ **A concise HackerRank problem that rewards understanding of array filtering and max value computation.**
