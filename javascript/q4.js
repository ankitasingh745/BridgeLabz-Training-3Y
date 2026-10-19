// Q4: Academic Performance Evaluator

const marks = [78, 85, 92, 66, 88]; // marks of 5 subjects (each out of 100)
const maxMarksPerSubject = 100;

// Total, average and percentage
let total = 0;
let hasFailedSubject = false;

for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  if (marks[i] < 35) {
    hasFailedSubject = true; // validation: any subject below 35
  }
}

const average = total / marks.length;
const percentage = (total / (marks.length * maxMarksPerSubject)) * 100;

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

let result;

if (hasFailedSubject || percentage < 50) {
  // Failing any single subject OR overall below 50% -> Detained
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  // Remaining case: 50% <= percentage < 85%
  result = "Promoted";
}

console.log(`Result: ${result}`);