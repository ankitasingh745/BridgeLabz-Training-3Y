// Q3: Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];
const expenses = [4500, 2000, 12000, 3200, 1800.5];

// Add up all expenses using the += assignment operator
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
  console.log(`${categories[i]}: ${expenses[i].toFixed(2)}`);
}

const average = total / expenses.length; // average per category

// Add 10% tax using arithmetic and assignment operators
const taxRate = 10;
let finalAmount = total;
finalAmount += total * taxRate / 100;

console.log("-----------------------------");
console.log(`Total expenses:       ${total.toFixed(2)}`);
console.log(`Average per category: ${average.toFixed(2)}`);
console.log(`Final amount (+${taxRate}% tax): ${finalAmount.toFixed(2)}`);