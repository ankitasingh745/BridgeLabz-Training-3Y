// Q3: Multi-Step Form with Next/Back & Validation

const steps = document.querySelectorAll(".step");
const wizard = document.getElementById("wizard");
const stepIndicator = document.getElementById("stepIndicator");
const errorMessage = document.getElementById("errorMessage");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// One entry per step: which input it uses and a validator that returns an error text ("" = valid)
const stepConfig = [
  {
    field: "name",
    inputId: "nameInput",
    validate: (value) => (value.trim().length >= 2 ? "" : "Name must be at least 2 characters."),
  },
  {
    field: "email",
    inputId: "emailInput",
    validate: (value) => (EMAIL_PATTERN.test(value.trim()) ? "" : "Please enter a valid email address."),
  },
  {
    field: "password",
    inputId: "passwordInput",
    validate: (value) => (value.length >= 6 ? "" : "Password must be at least 6 characters."),
  },
];

const formData = { name: "", email: "", password: "" };
let currentStep = 0;
const lastStep = steps.length - 1;

// Show only the current step and update the buttons
function showStep(stepIndex) {
  steps.forEach((step, index) => step.classList.toggle("active", index === stepIndex));
  stepIndicator.textContent = `Step ${stepIndex + 1} of ${steps.length}`;
  backButton.disabled = stepIndex === 0;
  nextButton.textContent = stepIndex === lastStep ? "Finish" : "Next";
  errorMessage.textContent = "";
}

// Show all collected answers once every step is complete
function showSummary() {
  wizard.hidden = true;
  summary.hidden = false;
  summary.innerHTML = `
    <h3>Summary</h3>
    <p><strong>Name:</strong> <span id="summaryName"></span></p>
    <p><strong>Email:</strong> <span id="summaryEmail"></span></p>
    <p><strong>Password:</strong> ${"*".repeat(formData.password.length)}</p>`;
  document.getElementById("summaryName").textContent = formData.name;
  document.getElementById("summaryEmail").textContent = formData.email;
}

nextButton.addEventListener("click", () => {
  const { field, inputId, validate } = stepConfig[currentStep];
  const inputValue = document.getElementById(inputId).value;

  // Move ahead only if the current input is valid
  const error = validate(inputValue);
  if (error) {
    errorMessage.textContent = error;
    return;
  }

  formData[field] = inputValue.trim();

  if (currentStep < lastStep) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);