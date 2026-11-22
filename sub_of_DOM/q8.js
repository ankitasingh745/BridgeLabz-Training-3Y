// Q8: Custom Dropdown Using Only JavaScript (no <select> tag)

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

// The button shows / hides the list of options
dropdownButton.addEventListener("click", () => {
  dropdownList.hidden = !dropdownList.hidden;
});

// Clicking an option updates the button text and closes the list (event delegation on the <ul>)
dropdownList.addEventListener("click", (event) => {
  const clickedOption = event.target.closest("li");
  if (!clickedOption) return;

  dropdownButton.textContent = clickedOption.textContent;
  dropdownList.hidden = true;
});

// Clicking outside closes the dropdown.
// The third argument "true" means the CAPTURING phase: this runs first, before any other
// click handler on the page can stop the event.
document.addEventListener(
  "click",
  (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.hidden = true;
    }
  },
  true
);