// Q1: Personalized Login Greeting

const userName = "Aarav";               // test user name
const currentHour = new Date().getHours(); // current hour (0-23)

let greeting;

if (currentHour < 12) {
  // Before noon
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  // 12:00 to 17:59
  greeting = `Good Afternoon ${userName}!`;
} else {
  // 18:00 onwards
  greeting = `Good Evening ${userName}!`;
}

console.log(`Current hour: ${currentHour}`);
console.log(greeting);