/*
 * Student Marks Processing Script
 * This script processes student marks, calculates averages, assigns grades,
 * determines pass/fail status, and generates a summary report.
 */

// Starter Data (copy/paste exactly)

const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] },
];

// initialized report variables to hold results
const report = [];
let passCount = 0;
let failCount = 0;
let topStudent = null;
let lowestStudent = null;

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let sum = 0;

  // Sum all  the student marks
  for (let j = 0; j < student.marks.length; j++) {
    sum += student.marks[j];
  }

  // Calculate average of all the marks
  let average = sum / student.marks.length;

  // Assign grade as per average using if...else
  let grade;
  if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Determine status using if...else
  let status;
  if (grade === "E") {
    status = "FAIL";
    failCount++;
  } else {
    status = "PASS";
    passCount++;
  }

  // Create report object
  let studentReport = {
    name: student.name,
    average: parseFloat(average.toFixed(2)),
    grade: grade,
    status: status,
  };

  report.push(studentReport); // Add to report array

  // Track top student
  if (topStudent === null || average > topStudent.average) {
    topStudent = studentReport;
  }

  // Track lowest student
  if (lowestStudent === null || average < lowestStudent.average) {
    lowestStudent = studentReport;
  }
}

// Print each student's report line
for (let i = 0; i < report.length; i++) {
  let r = report[i];
  console.log(
    r.name + ": Avg " + r.average + " | Grade " + r.grade + " | " + r.status
  );
}

// Print summary
console.log("\nClass Summary:");
console.log("Students: " + students.length);
console.log("Pass: " + passCount);
console.log("Fail: " + failCount);
console.log(
  "Top Student: " + topStudent.name + " (" + topStudent.average + ")"
);
console.log(
  "Lowest Student: " + lowestStudent.name + " (" + lowestStudent.average + ")"
);

/*
 * Explanation:
 * The program calculates each student's average, grade, and pass/fail status.
 * It keeps track of how many students passed and failed.
 * It finds the student with the highest and lowest average.
 * It prints each student's report line in the requested format.
 * Finally, it prints a class summary with total students, pass/fail counts, and top/lowest student info.
 */
