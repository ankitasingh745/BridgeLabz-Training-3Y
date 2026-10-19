// Q7: Smart Guessing Game (Number Range)

const secretNumber = Math.floor(Math.random() * 50) + 1; // 1 to 50
const userGuess = 25; // test value (change to try different guesses)

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`); // shown for testing only

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // Not exact: check if within ±3 using logical AND
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}