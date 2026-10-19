// Q8: Employee Salary Projection (5 years)

let salary = 50000;       // current salary
const incrementRate = 8;  // annual increment in %

const projection = [];

for (let year = 1; year <= 5; year++) {
  const increment = (salary * incrementRate) / 100;
  salary += increment; // assignment operator: add this year's increment

  projection.push({
    Year: year,
    Increment: Math.round(increment),
    Salary: Math.round(salary), // rounded for display
  });
}

console.table(projection);