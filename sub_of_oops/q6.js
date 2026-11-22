const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2500, stock: 40 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 8 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 25 },
  { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 100 },
  { id: 6, name: "Pen Set", category: "Stationery", price: 150, stock: 3 },
];

function getLowStockProducts(items, threshold = 10) {
  return items.filter((p) => p.stock < threshold);
}

function sortProductsByPrice(items, order = "asc") {
  return [...items].sort((a, b) => (order === "asc" ? a.price - b.price : b.price - a.price));
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}

console.log("Low stock (< 10):", getLowStockProducts(products).map((p) => `${p.name} (${p.stock})`));
console.log("Sorted by price (asc):", sortProductsByPrice(products).map((p) => `${p.name}: ${p.price}`));
console.log("Total inventory value: Rs.", calculateTotalInventoryValue(products));

const grouped = groupByCategory(products);
for (const category in grouped) {
  console.log(`${category}:`, grouped[category].map((p) => p.name));
}