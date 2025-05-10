# Divisible Sum Pairs (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given an array of integers and an integer `k`, determine the number of `(i, j)` pairs where:

- `i < j`
- `(arr[i] + arr[j]) % k === 0`

---

## 🧾 Function Signature

```javascript
function divisibleSumPairs(n: number, k: number, ar: number[]): number
```

- `n`: length of the array `ar`
- `k`: divisor
- `ar`: array of integers

---

## 📝 Example

### Example Input:
```javascript
n = 6  
k = 3  
ar = [1, 3, 2, 6, 1, 2]
```

### Example Output:
```text
5
```

### Explanation:
Valid pairs whose sum is divisible by 3:
- (0,1): 1+3 = 4 ❌  
- (0,2): 1+2 = 3 ✅  
- (0,3): 1+6 = 7 ❌  
- (0,4): 1+1 = 2 ❌  
- (0,5): 1+2 = 3 ✅  
...and so on → total = **5** valid pairs.

---

## ✅ JavaScript Solution

```javascript
function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) count++;
        }
    }
    return count;
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
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // Output: 5
```

---

## 📌 Notes

- Brute-force approach acceptable within small constraints.
- Reinforces nested loops and modular arithmetic logic.

---

⭐ **Ideal for demonstrating mastery of pair logic, indices, and clean modulo operations.**
