# Breaking the Records (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true)**

---

## 📖 Problem Description

Maria plays `n` games and tracks her scores after each game. She wants to know how many times she breaks:

- Her **best (highest)** score
- Her **worst (lowest)** score

Return an array with two integers:
- Number of times she broke her **highest** record
- Number of times she broke her **lowest** record

---

## 🧾 Function Signature

```javascript
function breakingRecords(scores: number[]): number[]
```

- `scores`: An array of integers representing Maria’s game scores.

---

## 📝 Example

### Example Input:
```javascript
scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
```

### Example Output:
```text
[2, 4]
```

### Explanation:

- High score breaks: 10 → 20 → 25 → **2 times**
- Low score breaks: 10 → 5 → 4 → 2 → 1 → **4 times**

---

## ✅ JavaScript Solution

```javascript
function breakingRecords(scores) {
    let max = scores[0], min = scores[0];
    let maxCount = 0, minCount = 0;

    for (let score of scores) {
        if (score > max) {
            max = score;
            maxCount++;
        } else if (score < min) {
            min = score;
            minCount++;
        }
    }

    return [maxCount, minCount];
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
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // Output: [2, 4]
```

---

## 📌 Notes

- Focuses on state tracking with comparisons.
- Great warm-up for maintaining variables during iteration.

---

⭐ **A classic score-tracking challenge — excellent for showcasing conditional state tracking.**
