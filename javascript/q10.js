// Q10: Citizen Eligibility Validator
//
// Note: the assignment's first two rules overlap (a citizen aged 18-20 also
// satisfies "citizen and age >= 18"). To keep them distinct, "all services"
// is applied from age 21 (citizens aged 18-20 can vote only).

const age = 19;
const isCitizen = true;

if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}