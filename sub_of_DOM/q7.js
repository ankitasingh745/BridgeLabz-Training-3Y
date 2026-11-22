// Q7: Detect Mouse Path & Coordinates Logger

const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

// Live coordinates while the mouse moves inside the box
box.addEventListener("mousemove", (event) => {
  const boxPosition = box.getBoundingClientRect();
  // Position inside the box = page position - box position - border width
  const xInsideBox = Math.round(event.clientX - boxPosition.left - box.clientLeft);
  const yInsideBox = Math.round(event.clientY - boxPosition.top - box.clientTop);

  coordinates.textContent =
    `clientX: ${event.clientX}, clientY: ${event.clientY}  |  inside box -> x: ${xInsideBox}, y: ${yInsideBox}`;
});

box.addEventListener("mouseleave", () => {
  coordinates.textContent = "Move the mouse inside the box...";
});

// Double-click drops a red dot exactly where the click happened
box.addEventListener("dblclick", (event) => {
  const boxPosition = box.getBoundingClientRect();

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${event.clientX - boxPosition.left - box.clientLeft}px`;
  dot.style.top = `${event.clientY - boxPosition.top - box.clientTop}px`;

  box.appendChild(dot);
});