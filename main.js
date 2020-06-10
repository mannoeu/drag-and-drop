/** https://developer.mozilla.org/pt-BR/docs/DragDrop/Drag_and_Drop
 * ------------------------
 * -- Elemento drop
 * dragstart
 * drag
 * dragend
 * -----------------------
 * -- Zona dropável
 * dragenter
 * dragover
 * dragleave
 * drop
 */

const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

function attArea() {
  dropzones.forEach((dropzone) => {
    const name = dropzone.getAttribute("name");
    const items = dropzone.children;
    let list = [];

    for (item of items) {
      list.push(item.textContent);
    }

    localStorage.setItem(name, list);
  });
}

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragEnd);
});

function dragStart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("is-dragging");
}

function drag() {
  this.classList.add("is-dragging");
}

function dragEnd() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging");
  attArea();
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("drop", drop);
});

function dragEnter() {}

function dragOver() {
  this.classList.add("is-over");
  const cardDrag = document.querySelector(".is-dragging");
  this.appendChild(cardDrag);
}

function dragLeave() {
  this.classList.remove("is-over");
}
function drop() {
  this.classList.remove("is-over");
}
