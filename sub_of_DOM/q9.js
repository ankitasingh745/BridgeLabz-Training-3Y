// Q9: Form Submit Blocker with preventDefault() and Live Errors

const registerForm = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

// Each validator returns an error text, or "" when the value is valid
const validators = {
  name: (value) => (value.trim() === "" ? "Name is required." : ""),
  email: (value) => {
    if (value.trim() === "") return "Email is required.";
    if (!value.includes("@")) return "Email must contain @.";
    return "";
  },
  password: (value) => (value.length < 6 ? "Password must be at least 6 characters." : ""),
};

// Show (or clear, when message is "") the inline error under one field
function showError(input, message) {
  document.getElementById(`${input.name}Error`).textContent = message;
  input.classList.toggle("invalid", message !== "");
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // always stop the real submission (page reload)
  successMessage.hidden = true;

  let isFormValid = true;

  // Check every field and show its error if invalid
  Object.keys(validators).forEach((fieldName) => {
    const input = registerForm.elements[fieldName];
    const errorText = validators[fieldName](input.value);
    showError(input, errorText);
    if (errorText !== "") isFormValid = false;
  });

  if (isFormValid) {
    successMessage.hidden = false; // "Form Submitted Successfully"
    registerForm.reset();
  }
});

// Live correction: once the user fixes a field, its error disappears automatically
registerForm.addEventListener("input", (event) => {
  const input = event.target;
  const validate = validators[input.name];
  if (!validate) return;

  const errorIsShowing = document.getElementById(`${input.name}Error`).textContent !== "";
  if (errorIsShowing && validate(input.value) === "") {
    showError(input, "");
  }
});