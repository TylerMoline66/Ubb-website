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
