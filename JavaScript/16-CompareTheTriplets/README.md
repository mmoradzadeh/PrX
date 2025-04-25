# Compare the Triplets (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true)**

---

## 📖 Problem Description

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, scoring them on a scale from **1 to 100** across three categories: **problem clarity**, **originality**, and **difficulty**.

Given two arrays `a` and `b`, compare the elements in each position and calculate their scores:

- If `a[i] > b[i]`, then Alice receives **1 point**.
- If `a[i] < b[i]`, then Bob receives **1 point**.
- If `a[i] == b[i]`, no points are awarded.

Return the scores as an array `[Alice's score, Bob's score]`.

---

## 🧾 Function Signature

```javascript
function compareTriplets(a: number[], b: number[]): number[]
```

---

## 📝 Example

### Example Input:
```javascript
a = [5, 6, 7]
b = [3, 6, 10]
```

### Example Output:
```text
1 1
```

### Explanation:
- Compare 5 vs 3 → Alice +1
- Compare 6 vs 6 → No points
- Compare 7 vs 10 → Bob +1

Result → `[1, 1]`

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run it with Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTriplets(a, b)); // Output: [1, 1]
```

---

## ✅ JavaScript Solution

```javascript
function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }

    return [aliceScore, bobScore];
}
```

---

## 📌 Notes

- Useful for understanding array iteration, conditionals, and basic comparative logic.
- A fundamental competitive programming warm-up exercise.

---

⭐ **Add this to your JavaScript repo to show mastery of basic array comparison and scoring logic.**
