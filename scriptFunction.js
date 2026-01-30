/*
 * Converting the folowing into functions
 * Exercise: two
 */

// Starter Data (copy/paste exactly)
const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] },
];

// Function to calculate average marks for a student
function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// Function to assign grade based on average
function getGrades(average) {
  if (average >= 80) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else if (average >= 50) {
    return "D";
  } else {
    return "E";
  }
}

// Determine fail/pass status using function
function determineStatus(grade) {
  if (grade === "E") {
    return "FAIL";
  } else {
    return "PASS";
  }
}

// Create report object and summary
function generateReport(students) {
  const report = [];
  let passCount = 0;
  let failCount = 0;
  let topStudent = null;
  let lowestStudent = null;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.marks);
    const grade = getGrades(average);
    const status = determineStatus(grade);

    // Track pass/fail counts
    if (status === "PASS") {
      passCount++; // Increment pass count
    } else {
      failCount++; // Increment fail count
    }

    // Create student report object
    const studentReport = {
      name: student.name,
      average: parseFloat(average.toFixed(2)),
      grade: grade,
      status: status,
    };

    report.push(studentReport);

    // Track top student
    if (topStudent === null || average > topStudent.average) {
      topStudent = studentReport;
    }

    // Track lowest student
    if (lowestStudent === null || average < lowestStudent.average) {
      lowestStudent = studentReport;
    }
  }

  return {
    report,
    passCount,
    failCount,
    topStudent,
    lowestStudent,
  };
}

// Function to print the report and summary
function printReportAndSummary(reportData) {
  const { report, passCount, failCount, topStudent, lowestStudent } =
    reportData;

  // Print each student's report line
  for (let i = 0; i < report.length; i++) {
    const r = report[i];
    console.log(`${r.name}: Avg ${r.average} | Grade ${r.grade} | ${r.status}`);
  }

  // Print summary
  console.log("\nClass Summary:");
  console.log("Students: " + report.length);
  console.log("Pass: " + passCount);
  console.log("Fail: " + failCount);
  console.log(`Top Student: ${topStudent.name} (${topStudent.average})`);
  console.log(
    `Lowest Student: ${lowestStudent.name} (${lowestStudent.average})`
  );
}

// Main execution
const reportData = generateReport(students);
printReportAndSummary(reportData);

/*
 * Explanation:
 * The program calculates each student's average, grade, and pass/fail status.
 * It keeps track of how many students passed and failed.
 * It finds the student with the highest and lowest average.
 * It prints each student's report line in the requested format.
 * Finally, it prints a class summary with total students, pass/fail counts, and top/lowest student info.
 */
