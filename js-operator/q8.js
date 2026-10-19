const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const discountedCart = [];

for (let i = 0; i < cart.length; i++) {
  let discountPercent = 0;

  if (cart[i].category === "electronics") {
    discountPercent = 10;
  } else if (cart[i].category === "fashion") {
    discountPercent = 5;
  }

  const finalPrice = cart[i].price - (cart[i].price * discountPercent) / 100;

  discountedCart.push({
    item: cart[i].item,
    originalPrice: cart[i].price,
    discountPercent: discountPercent,
    finalPrice: finalPrice
  });
}

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let finalTotal = discountedCart.reduce((sum, product) => sum + product.finalPrice, 0);

console.table(discountedCart);

if (originalTotal > 50000) {
  finalTotal -= (finalTotal * 5) / 100;
  console.log("Extra 5% cart discount applied");
}

console.log(`Original total: ${originalTotal.toFixed(2)}`);
console.log(`Final total:    ${finalTotal.toFixed(2)}`);