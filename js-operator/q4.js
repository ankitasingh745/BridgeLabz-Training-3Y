const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
const passedStudents = scores.filter(score => score >= 50);

console.log(`
Performance Summary
-------------------
Scores:         ${scores.join(", ")}
Highest:        ${highest}
Lowest:         ${lowest}
Average:        ${average.toFixed(2)}
Passed (>=50):  ${passedStudents.length} of ${scores.length}
`);