// Q4: Theme Switcher Using Attribute Manipulation

const themeButtons = document.getElementById("themeButtons");
const currentThemeLabel = document.getElementById("currentTheme");

function applyTheme(themeName) {
  // 1) Add the theme class to <body> using setAttribute()
  document.body.setAttribute("class", `theme-${themeName}`);

  // 2) Save the current theme in a custom attribute, e.g. data-theme="dark"
  document.body.setAttribute("data-theme", themeName);

  currentThemeLabel.textContent = document.body.getAttribute("data-theme");
}

// One listener on the container handles all three buttons
themeButtons.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button[data-theme-name]");
  if (!clickedButton) return;
  applyTheme(clickedButton.getAttribute("data-theme-name"));
});

applyTheme("light"); // default theme