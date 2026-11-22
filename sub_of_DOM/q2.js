// Q2: Live Character Counter with Warning Behavior

const MAX_CHARACTERS = 100;
const WARNING_LIMIT = 20; // counter turns yellow when this many (or fewer) characters are left

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

// Recalculate remaining characters and update text + colour
function updateCounter() {
  const remaining = MAX_CHARACTERS - messageBox.value.length;
  counter.textContent = `${remaining} characters left`;

  counter.classList.remove("warning", "danger");
  if (remaining <= 0) {
    counter.classList.add("danger");
  } else if (remaining <= WARNING_LIMIT) {
    counter.classList.add("warning");
  }
}

// Stop extra typing once the limit is reached (no maxlength attribute used on purpose)
messageBox.addEventListener("keydown", (event) => {
  // Keys that add text: single characters and Enter. Backspace, arrows, Ctrl+C etc. stay allowed.
  const addsText =
    (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) ||
    event.key === "Enter";
  const isTextSelected = messageBox.selectionStart !== messageBox.selectionEnd; // typing would replace it

  if (addsText && messageBox.value.length >= MAX_CHARACTERS && !isTextSelected) {
    event.preventDefault();
  }
});

// Safety net: a long paste can still cross the limit, so trim it
messageBox.addEventListener("input", () => {
  if (messageBox.value.length > MAX_CHARACTERS) {
    messageBox.value = messageBox.value.slice(0, MAX_CHARACTERS);
  }
  updateCounter();
});

// Reset clears the text and the counter
resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});

updateCounter();