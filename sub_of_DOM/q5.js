// Q5: Image Gallery with Modal Preview

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

function openModal(thumbnail) {
  modalImage.src = thumbnail.dataset.full; // load the bigger version
  modalImage.alt = thumbnail.alt;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
  modalImage.src = "";
}

// Event delegation: one listener on the grid handles clicks on all 6 images
gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (clickedImage) openModal(clickedImage);
});

// Clicking the dark background (outside the modal box) closes the modal
modal.addEventListener("click", closeModal);

// Clicks inside the modal box must NOT reach the background, so they do not close it
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Bonus: Escape key also closes the modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});