// Q2: Multi-Type Data Summary

const userName = "Priya Sharma";                      // string
const age = 24;                                       // number
const isActive = true;                                // boolean
const hobbies = ["reading", "cycling", "coding"];     // array
const address = { city: "Rohtak", state: "Haryana" }; // object
const middleName = null;                              // null
let phoneNumber;                                      // undefined (declared, not assigned)

// Helper: typeof reports "object" for arrays and null, so we check those specially
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Build report rows: label + value + type
const entries = [
  ["userName", userName],
  ["age", age],
  ["isActive", isActive],
  ["hobbies", hobbies],
  ["address", address],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

const report = entries.map(([label, value]) => ({
  Label: label,
  Value: JSON.stringify(value) === undefined ? "undefined" : JSON.stringify(value),
  Type: getType(value),
}));

// One console.table() statement prints the whole report
console.table(report);