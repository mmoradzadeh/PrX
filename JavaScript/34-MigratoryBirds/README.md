# Migratory Birds (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true)**

---

## 📖 Problem Description

You are given an array of bird sightings, where each element represents a bird type ID.  

Your task is to find the **lowest type number** of the bird that is sighted the **most frequently**.

---

## 🧾 Function Signature

```javascript
function migratoryBirds(arr: number[]): number
```

- `arr`: array of integers representing bird type IDs.

---

## 📝 Example

### Example Input:
```javascript
arr = [1, 1, 2, 2, 3, 3, 3, 4, 5]
```

### Example Output:
```text
3
```

### Explanation:

Bird sightings:
- Type 1 → 2 sightings
- Type 2 → 2 sightings
- Type 3 → 3 sightings ✅ (most frequent)
- Type 4 → 1 sighting
- Type 5 → 1 sighting

Result → **3**

---

## ✅ JavaScript Solution

```javascript
function migratoryBirds(arr) {
    const count = {};

    for (let bird of arr) {
        count[bird] = (count[bird] || 0) + 1;
    }

    let maxFreq = 0;
    let minType = Infinity;

    for (let type in count) {
        if (count[type] > maxFreq || (count[type] === maxFreq && type < minType)) {
            maxFreq = count[type];
            minType = type;
        }
    }

    return Number(minType);
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
console.log(migratoryBirds([1, 1, 2, 2, 3, 3, 3, 4, 5])); // Output: 3
```

---

## 📌 Notes

- Demonstrates **frequency counting** using an object/map.
- Also tests handling of **tie-breaking logic** (return the smallest type number in case of equal frequency).

---

⭐ **Great exercise to showcase basic map usage, max finding, and tie-breaking strategies.**
