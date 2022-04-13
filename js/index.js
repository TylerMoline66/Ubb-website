(() => {
  // handle navigation menus
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

const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);
