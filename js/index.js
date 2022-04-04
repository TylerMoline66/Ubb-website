(() => {
  const navMenus = document.querySelectorAll("#navMenu");

  function toggleMenu(e) {
    const subMenu = e.target.lastElementChild;
    subMenu.classList.toggle("sub-menu-hovered");
  }

  navMenus.forEach((navMenu) => {
    navMenu.addEventListener("mouseenter", toggleMenu);
    navMenu.addEventListener("mouseleave", toggleMenu);
  });
})();

// Gallery on click event

const galleryImage = document.getElementById("galleryImg");

function galleryImgGrow() {}

galleryImage.addEventListener("click", galleryImgGrow());
