# Day of the Programmer (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true)**

---

## 📖 Problem Description

Russia transitioned from the Julian calendar to the Gregorian calendar in 1918, skipping 13 days (January 31 was followed by February 14). Write a function that returns the **256th day of the year** (`Day of the Programmer`) for a given year `y` between 1700 and 2700.

---

## 🧾 Function Signature

```javascript
function dayOfProgrammer(year: number): string
```

Returns the **date of the 256th day** of the year in the format: `dd.mm.yyyy`

---

## 📅 Calendar Rules

| Year Type      | Rule                                              |
|----------------|---------------------------------------------------|
| Julian (1700–1917) | Leap if divisible by 4                          |
| Gregorian (1919–2700) | Leap if divisible by 400, or divisible by 4 and not 100 |
| Transition Year (1918) | 256th day is `26.09.1918` due to 13-day shift |

---

## 📝 Examples

### Example 1:
```javascript
Input: 2017
Output: "13.09.2017"
```

### Example 2:
```javascript
Input: 2016
Output: "12.09.2016"
```

### Example 3:
```javascript
Input: 1800
Output: "12.09.1800"
```

---

## ✅ JavaScript Solution

```javascript
function dayOfProgrammer(year) {
    if (year === 1918) return "26.09.1918";

    const isJulianLeap = year < 1918 && year % 4 === 0;
    const isGregorianLeap = year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));

    const day = (isJulianLeap || isGregorianLeap) ? 12 : 13;

    return `${day}.09.${year}`;
}
```

---

## 🚀 How to Execute

1. Save the code in a file called `solution.js`
2. Run with Node.js:

```bash
node solution.js
```

### Example Usage:

```javascript
console.log(dayOfProgrammer(2017)); // Output: "13.09.2017"
console.log(dayOfProgrammer(1800)); // Output: "12.09.1800"
console.log(dayOfProgrammer(1918)); // Output: "26.09.1918"
```

---

## 📌 Notes

- This problem tests conditional logic and understanding of leap year rules across two calendar systems.
- Be precise with string formatting.

---

⭐ **Great for showing off attention to historical edge cases and logical branching.**
