// Q6: Progressive Discount System

const totalAmount = 6500; // total purchase amount

let discountPercent;

if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Final price after discount, rounded to nearest whole number
const finalPrice = Math.round(totalAmount - (totalAmount * discountPercent) / 100);

console.log(`Original total:      ${totalAmount}`);
console.log(`Discount percentage: ${discountPercent}%`);
console.log(`Final price:         ${finalPrice}`);