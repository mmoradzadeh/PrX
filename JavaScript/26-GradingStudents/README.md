# Grading Students (JavaScript)

🔗 **[HackerRank Problem Link](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)**

---

## 📖 Problem Description

HackerLand University has the following grading policy:

- Every student receives a grade between `0` and `100`.
- Any grade less than `38` is a failing grade.
- If the grade is within **2 marks of the next multiple of 5**, round it up.
- If rounding results in a grade < 40, it is still a failing grade.

---

## 🧾 Function Signature

```javascript
function gradingStudents(grades: number[]): number[]
```

- `grades`: An array of integers representing student grades.

---

## 📝 Example

### Example Input:
```javascript
grades = [73, 67, 38, 33]
```

### Example Output:
```text
[75, 67, 40, 33]
```

---

## ✅ JavaScript Solution

```javascript
function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        return (nextMultipleOf5 - grade < 3) ? nextMultipleOf5 : grade;
    });
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
console.log(gradingStudents([73, 67, 38, 33])); // Output: [75, 67, 40, 33]
```

---

## 📌 Notes

- Great practice for using `.map()` and conditional logic.
- Real-world style problem focusing on clean business logic and transformation.

---

⭐ **Solid example of implementing clear condition-based transformation logic in JavaScript.**
