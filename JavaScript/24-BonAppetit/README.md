# Bon Appétit (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true)**

---

## 📖 Problem Description

Anna and Brian are sharing the cost of a meal. Each person pays for all the items they consumed. Brian calculates Anna's share, but Anna didn't eat item at index `k`. If Brian overcharged her, print the amount; otherwise, print `"Bon Appetit"`.

---

## 🧾 Function Signature

```javascript
function bonAppetit(bill: number[], k: number, b: number): void
```

- `bill`: array of integers representing item prices
- `k`: the zero-based index of the item Anna didn't eat
- `b`: the amount Brian charged Anna

---

## 📝 Example

### Example Input:
```javascript
bill = [3, 10, 2, 9]
k = 1
b = 12
```

### Example Output:
```text
5
```

### Explanation:
Anna didn't eat item 10 (index 1).  
Bill without that item = 3 + 2 + 9 = 14 → split = 7  
Brian charged 12 → overcharge = `12 - 7 = 5`

---

## ✅ JavaScript Solutions

### 🔹 Solution 1: Imperative Approach (For Loop)
```javascript
function bonAppetit1(bill, k, b) {
    let calculated = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) calculated += bill[i];
    }
    console.log(calculated / 2 === b ? "Bon Appetit" : b - calculated / 2);
}
```

### 🔹 Solution 2: Functional Approach (reduce)
```javascript
function bonAppetit2(bill, k, b) {
    const calculated = bill.reduce((sum, val, idx) => idx !== k ? sum + val : sum, 0);
    console.log(calculated / 2 === b ? "Bon Appetit" : b - calculated / 2);
}
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run using Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
bonAppetit1([3, 10, 2, 9], 1, 12); // Output: 5
bonAppetit2([3, 10, 2, 9], 1, 7);  // Output: Bon Appetit
```

---

## 📌 Notes

- Demonstrates basic array traversal and reduction techniques.
- Useful for comparing imperative and functional approaches in JavaScript.

---

⭐ **Showcasing both loop-based and `.reduce()`-based approaches adds depth to your solution portfolio.**
