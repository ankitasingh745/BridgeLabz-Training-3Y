const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Coke", price: 50 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((name) => {
    const found = menu.find((m) => m.item.toLowerCase() === name.toLowerCase());
    if (!found) {
      throw new Error(`Invalid item ordered: "${name}" is not on the menu`);
    }
    return found.price;
  });

  return prices.reduce((total, p) => total + p, 0);
}

const orders = [
  ["Burger", "Coke"],
  ["Pizza", "Pasta", "Coke"],
  ["Burger", "Sushi"],
];

orders.forEach((order) => {
  try {
    console.log(`Order [${order.join(", ")}] -> Total: Rs.${calculateBill(order)}`);
  } catch (err) {
    console.log(`Could not process order [${order.join(", ")}]: ${err.message}`);
  }
});