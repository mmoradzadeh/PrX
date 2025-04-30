# Time Conversion (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true)**

---

## 📖 Problem Description

Given a time in **12-hour AM/PM format**, convert it to **24-hour military time**.

---

## 🧾 Function Signature

```javascript
function timeConversion(s: string): string
```

- `s`: A string representing time in 12-hour format (e.g. `"07:05:45PM"`).
- Returns a string representing time in 24-hour format (e.g. `"19:05:45"`).

---

## 📝 Example

### Example Input:
```text
s = "07:05:45PM"
```

### Example Output:
```text
19:05:45
```

---

## ✅ JavaScript Solution

```javascript
function timeConversion(s) {
    const period = s.slice(-2);
    let [hh, mm, ss] = s.slice(0, 8).split(":");

    if (period === "AM") {
        if (hh === "12") hh = "00";
    } else {
        if (hh !== "12") hh = String(Number(hh) + 12);
    }

    return [hh, mm, ss].join(":");
}
```

---

## 🚀 How to Execute

1. Save the code in a file named `solution.js`
2. Run with Node.js:

```bash
node solution.js
```

### Sample Test:

```javascript
console.log(timeConversion("07:05:45PM")); // Output: 19:05:45
console.log(timeConversion("12:00:00AM")); // Output: 00:00:00
console.log(timeConversion("12:45:54PM")); // Output: 12:45:54
```

---

## 📌 Notes

- Be careful with edge cases:
  - `"12:00:00AM"` → `"00:00:00"`
  - `"12:00:00PM"` → `"12:00:00"`
- Uses basic string slicing and conditional logic.

---

⭐ **A classic HackerRank challenge that tests string manipulation and time format understanding.**
