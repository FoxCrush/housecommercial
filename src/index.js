import myFN from './js/modal';

// navigation panel contros
const navRefs = {
    navMenuButton: document.querySelector(".nav-menu-button-container"),
    navMenuSlider: document.querySelector(".nav-slider-container")
}
function onNavMenuButtonClick () {
    navRefs.navMenuButton.classList.toggle("tapped");
    navRefs.navMenuSlider.classList.toggle("tapped");
}
navRefs.navMenuButton.addEventListener('click', onNavMenuButtonClick);

console.log(myFN);
