// Q1: Dynamic Product List Manager (Add, Edit, Delete using event delegation)

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Keeps track of the <li> that is currently in edit mode (only one at a time)
let currentlyEditingItem = null;

// Build one <li> with a name and Edit / Delete buttons
function createProductItem(productName) {
  const item = document.createElement("li");
  item.className = "product-item";
  item.innerHTML = `
    <span class="product-name"></span>
    <span class="actions">
      <button data-action="edit">Edit</button>
      <button data-action="delete">Delete</button>
    </span>`;
  // textContent (not innerHTML) so typed text is never treated as HTML
  item.querySelector(".product-name").textContent = productName;
  return item;
}

// ADD: create a new product from the input box
function addProduct() {
  const productName = productInput.value.trim();
  if (productName === "") {
    productInput.focus();
    return;
  }
  productList.appendChild(createProductItem(productName));
  productInput.value = "";
  productInput.focus();
}

// EDIT: swap the name <span> for an <input> so the text can be edited inline
function startEditing(item) {
  // Save any other item that is still being edited
  if (currentlyEditingItem && currentlyEditingItem !== item) {
    saveEditing(currentlyEditingItem);
  }

  const nameSpan = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;
  editInput.dataset.original = nameSpan.textContent; // fallback if user leaves it empty

  nameSpan.replaceWith(editInput);
  item.querySelector('[data-action="edit"]').textContent = "Save";
  currentlyEditingItem = item;

  editInput.focus();
  editInput.select();
}

// SAVE: swap the <input> back to a normal <span> with the new text
function saveEditing(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) return;

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = editInput.value.trim() || editInput.dataset.original;

  editInput.replaceWith(nameSpan);
  item.querySelector('[data-action="edit"]').textContent = "Edit";

  if (currentlyEditingItem === item) {
    currentlyEditingItem = null;
  }
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// EVENT DELEGATION: one click listener on the parent <ul> handles every Edit/Delete button,
// including buttons of products that are added later.
productList.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  const item = clickedButton.closest("li");
  const action = clickedButton.dataset.action;

  if (action === "delete") {
    if (item === currentlyEditingItem) currentlyEditingItem = null;
    item.remove();
  } else if (action === "edit") {
    // The same button toggles between Edit and Save
    if (item === currentlyEditingItem) {
      saveEditing(item);
    } else {
      startEditing(item);
    }
  }
});

// Pressing Enter inside the edit box also saves
productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEditing(event.target.closest("li"));
  }
});

// AUTO-SAVE: a click anywhere outside the edited item saves it
document.addEventListener("click", (event) => {
  if (currentlyEditingItem && !currentlyEditingItem.contains(event.target)) {
    saveEditing(currentlyEditingItem);
  }
});