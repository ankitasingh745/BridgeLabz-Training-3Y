// Q6: Real-Time Table Filter Using the input Event

const searchBox = document.getElementById("searchBox");
const studentRows = document.querySelectorAll("#tableBody .student-row");
const noResultsRow = document.getElementById("noResultsRow");

// "input" fires on every keystroke, paste and delete
searchBox.addEventListener("input", () => {
  // Lower-case both sides so the search is case-insensitive
  const searchText = searchBox.value.trim().toLowerCase();
  let visibleRowCount = 0;

  studentRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase(); // Name + Branch + CGPA together
    const isMatch = rowText.includes(searchText);

    row.hidden = !isMatch; // hide rows that do not match
    if (isMatch) visibleRowCount++;
  });

  // Show the message only when nothing matched
  noResultsRow.hidden = visibleRowCount > 0;
});