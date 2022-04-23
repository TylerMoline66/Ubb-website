/* 
  HOW TO USE:
  1. Import this file into your html file

  2. Import the carousel.css file into your html file

  3 Add the following class to each image you want to use in the carousel
    class="selector__img"

  4. Add the following html at the top of your file to handle the carousel
    <div id="carousel__wrapper" class="c__wrapper">
      <button id="carousel__btn--back" class="c__btn">&#8249;</button>
      <div id="carousel__img" class="c__img"></div>
      <button id="carousel__btn--next" class="c__btn">&#8250;</button>
      <button id="carousel__btn--exit" class="c__btn">x</button>
    </div>
 */

(() => {
  /* dom selectors */
  const carouselWrapper = document.getElementById("carousel__wrapper");
  const carouselImg = document.getElementById("carousel__img");
  const carouselNext = document.getElementById("carousel__btn--next");
  const carouselBack = document.getElementById("carousel__btn--back");
  const carouselExit = document.getElementById("carousel__btn--exit");
  const images = document.querySelectorAll(".selector__img");

  /* state */
  let index = 0;

  /* event handlers */
  function handleOpen(e) {
    const index = e.target.dataset.index;
    const image = images[index];
    carouselImg.style.backgroundImage = `url(${image.src})`;
    carouselWrapper.style.display = "flex";

    setTimeout(() => {
      document.querySelector("body").style.overflow = "hidden";
      carouselWrapper.classList.add("c--open");
    }, 100);
  }
  function handleNext() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    carouselImg.style.backgroundImage = `url(${images[index].src})`;
  }
  function handleBack() {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    carouselImg.style.backgroundImage = `url(${images[index].src})`;
  }
  function handleExit(e) {
    if (
      e.target.id === "carousel__btn--exit" ||
      e.target.id === "carousel__wrapper"
    ) {
      carouselWrapper.classList.remove("c--open");
      document.querySelector("body").style.overflow = "auto";
      setTimeout(() => {
        carouselWrapper.style.display = "none";
      }, 300);
    }
  }

  /* event listeners */
  carouselNext.addEventListener("click", handleNext);
  carouselBack.addEventListener("click", handleBack);
  carouselExit.addEventListener("click", handleExit);
  carouselWrapper.addEventListener("click", handleExit);
  images.forEach((image, index) => {
    image.dataset.index = index;
    image.addEventListener("click", handleOpen);
  });
})();
