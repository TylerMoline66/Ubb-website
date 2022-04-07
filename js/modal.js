const galleryImage = document.getElementById("galleryImg");

const galleryImages = document.querySelectorAll("img");
const modalContainer = document.getElementById("modal__container");
const modalImg = document.getElementById("modal__img");

let currentImage = null;

function galleryImgGrow(event) {
  const url = event.target.src;

  modalImg.style.backgroundImage = `url(${url})`;

  modalContainer.classList.toggle("modal__container--closed");
  modalContainer.classList.toggle("modal__container--open");

  document.querySelector("body").style.overflow = "hidden";

  currentImage = event.target;
}

galleryImages.forEach((g) => {
  g.addEventListener("click", galleryImgGrow);
});

modalContainer.addEventListener("click", (e) => {
  const isOpen = modalContainer.classList.contains("modal__container--open");
  const isButton = document.getElementById("modal__button--next");

  if (isButton.id === e.target.id) return;

  if (e.target.id !== modalImg.id && isOpen) {
    modalContainer.classList.toggle("modal__container--closed");
    modalContainer.classList.toggle("modal__container--open");
    document.querySelector("body").style.overflow = "auto";
  }
});

function onNext(event) {
  let index;
  galleryImages.forEach((g, i) => {
    if (g.src === currentImage.src) {
      index = i + 1;
    }
  });

  const url = galleryImages[index].src;

  modalImg.style.backgroundImage = `url(${url})`;

  currentImage = galleryImages[index + 1];
}

document
  .getElementById("modal__button--next")
  .addEventListener("click", onNext);

// ?????????????????///?????///?????////////////////

function onBack(event) {
  let index;
  galleryImages.forEach((g, i) => {
    if (g.src === currentImage.src) {
      index = i--;
    }
  });

  const url = galleryImages[index].src;

  modalImg.style.backgroundImage = `url(${url})`;

  currentImage = galleryImages[index--];
}

document
  .getElementById("modal__button--back")
  .addEventListener("click", onBack);
