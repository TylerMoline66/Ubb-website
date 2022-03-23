(() => {
  const navMenu = document.getElementById("navMenu");

  function toggleMenu() {
    const subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("sub-menu-hovered");
  }

  navMenu.addEventListener("mouseenter", toggleMenu);
  navMenu.addEventListener("mouseleave", toggleMenu);
})();
