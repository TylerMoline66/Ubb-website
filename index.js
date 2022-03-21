// const subMenu = document.getElementById('subMenu')

// subMenu.addEventListener('mouseover', function (event){
// subMenu.classList.add(".sub-menu-hovered");})




const downMenu = document.getElementById('subMenu')
const menuI = document.getElementById('menuIcon')

menuI.onmouseover = function () {
if (menuI.mouseover == true) {
downMenu.classList.add("sub-menu-hovered");
}  else {
downMenu.classList.remove("sub-menu-hovered");
}
}


