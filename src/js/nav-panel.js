const navRefs = {
    navMenuButton: document.querySelector(".nav-menu-button-container"),
    navMenuSlider: document.querySelector(".nav-slider-container"),
    navMenuCloseBtnEl : document.querySelector(".nav-menu-bar3")
}

function onNavMenuButtonClick(e) {
    e.preventDefault();
    navRefs.navMenuButton.classList.toggle("tapped");
    navRefs.navMenuSlider.classList.toggle("tapped");
    window.addEventListener('mouseup', onOtherPlaceClick)
}
function onOtherPlaceClick(e) {
    e.preventDefault();
    navRefs.navMenuButton.classList.remove("tapped");
    navRefs.navMenuSlider.classList.remove("tapped");
    console.log('click')

}
navRefs.navMenuButton.addEventListener('click', onNavMenuButtonClick);
// window.addEventListener('click', onOtherPlaceClick);

