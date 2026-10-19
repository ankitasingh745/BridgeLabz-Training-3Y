// Q5: Weather Activity Planner

const temperature = 12;  // in °C
const isRaining = false;
const windSpeed = 25;    // in km/h

let advice;

if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  // && : both cold AND windy must be true
  advice = "Too cold and windy — stay home.";
} else {
  advice = "Perfect day for a walk.";
}

console.log(`Temperature: ${temperature}°C | Raining: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(advice);