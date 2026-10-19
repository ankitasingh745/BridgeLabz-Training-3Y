const bonus = 5000;

function calculateSalary(isPermanent) {
  const salary = 40000;
  let totalSalary = salary;

  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Global bonus after both calls: ${bonus}`);
console.log(`typeof salary outside function: ${typeof salary}`);
console.log(`typeof isPermanent outside function: ${typeof isPermanent}`);