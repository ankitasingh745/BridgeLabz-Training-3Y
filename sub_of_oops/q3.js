function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Discount must be between 0 and 100");
  }
  return this.price - (this.price * percent) / 100;
};

const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 20000);
const shoes = new Product("Shoes", 3000);

console.log(`${laptop.name}: Rs.${laptop.price} -> Rs.${laptop.applyDiscount(10)} (10% off)`);
console.log(`${phone.name}: Rs.${phone.price} -> Rs.${phone.applyDiscount(25)} (25% off)`);
console.log(`${shoes.name}: Rs.${shoes.price} -> Rs.${shoes.applyDiscount(50)} (50% off)`);

// Abstraction: caller sirf applyDiscount(percent) call karta hai,
// formula aur validation method ke andar hidden hai.