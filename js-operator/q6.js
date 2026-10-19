let count = 0;

function increment() {
  count++;
  console.log(`Incremented: ${count}`);
}

function decrement() {
  count--;
  console.log(`Decremented: ${count}`);
}

function createStepCounter() {
  let step = 0;

  function addStep() {
    step++;
    count += step;
    console.log(`Nested function -> step: ${step}, count: ${count}`);
  }

  return addStep;
}

increment();
increment();
increment();
decrement();

const stepCounter = createStepCounter();
stepCounter();
stepCounter();

console.log(`Final count: ${count}`);