# Sock Merchant (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true)**

---

## 📖 Problem Description

Alex has a collection of socks. Each sock has a color represented by an integer.  
Determine how many **matching pairs** of socks Alex can sell.

---

## 🧾 Function Signature

```javascript
function sockMerchant(n: number, ar: number[]): number
```

- `n`: the number of socks in the pile.
- `ar`: an array of integers representing the color of each sock.

---

## 📝 Example

### Example Input:
```javascript
n = 9  
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
```

### Example Output:
```text
3
```

### Explanation:
- Sock colors and counts:  
  - 10 → 4 socks → 2 pairs  
  - 20 → 3 socks → 1 pair  
  - 30, 50 → 1 sock each → 0 pairs

Total pairs = **3**

---

## ✅ JavaScript Solution

```javascript
function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;

    for (let color of ar) {
        colorCount[color] = (colorCount[color] || 0) + 1;
        if (colorCount[color] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
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
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
```

---

## 📌 Notes

- Demonstrates use of object mapping to count frequency.
- Classic pairing algorithm — good for hashing and conditional logic practice.

---

⭐ **Solid choice for showcasing problem-solving with frequency counting and modular logic.**
