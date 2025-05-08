# Apple and Orange (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true)**

---

## 📖 Problem Description

Sam's house is located between two points `s` and `t`.  
There’s an apple tree on the left at point `a`, and an orange tree on the right at point `b`.

You are given arrays of distances where:
- Apples fall from point `a`
- Oranges fall from point `b`

Write a function to determine:
- How many apples fall on Sam’s house
- How many oranges fall on Sam’s house

---

## 🧾 Function Signature

```javascript
function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void
```

- `s, t`: Start and end points of Sam’s house
- `a`: Position of the apple tree
- `b`: Position of the orange tree
- `apples[]`: Distances apples fall from tree `a`
- `oranges[]`: Distances oranges fall from tree `b`

---

## 📝 Example

### Example Input:
```javascript
s = 7, t = 11
a = 5, b = 15
apples = [-2, 2, 1]
oranges = [5, -6]
```

### Example Output:
```text
1
1
```

### Explanation:
- Apple at 5 + (-2) = 3 (miss), 5 + 2 = 7 (hit), 5 + 1 = 6 (miss) → 1 apple hits
- Orange at 15 + 5 = 20 (miss), 15 + (-6) = 9 (hit) → 1 orange hits

---

## ✅ JavaScript Solution

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const applesOnHouse = apples.map(d => a + d).filter(p => p >= s && p <= t).length;
    const orangesOnHouse = oranges.map(d => b + d).filter(p => p >= s && p <= t).length;

    console.log(applesOnHouse);
    console.log(orangesOnHouse);
}
```

---

## 🚀 How to Execute

1. Save the code in `solution.js`
2. Run with Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// Expected Output:
// 1
// 1
```

---

## 📌 Notes

- Good for practicing coordinate transformations and `.map()`/`.filter()` chaining.
- Helps reinforce range-checking logic.

---

⭐ **Classic HackerRank problem to test array manipulation and spatial reasoning logic.**
