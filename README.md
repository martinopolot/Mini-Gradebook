# JavaScript Assignment:

## Student Marks Analyzer (Mini Gradebook)

- Concepts covered:
  - Objects, Arrays, for loops, if statements

## Requirements

1. Compute each student’s average

- Loop through the students array
- For each student, loop through their marks array
- Sum the marks, then calculate the average

2. Assign a grade using if statements
   Use this grading system:

- A if average >= 80
- B if average >= 70
- C if average >= 60
- D if average >= 50
- E otherwise

3. Create a new array called report
   Each item in report should be an object like this:

{ name: "Amina", average: 79.25, grade: "B", status: "PASS" }

## Rules:

- status is "PASS" if average >= 60
- otherwise status is "FAIL"

---

## Then print a summary:

- Total number of students
- Number of PASS vs FAIL
- Top student (highest average) + average
- Lowest student (lowest average) + average
