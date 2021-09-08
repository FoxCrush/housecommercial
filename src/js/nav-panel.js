const navRefs = {
    navMenuButton: document.querySelector(".nav-menu-button-container"),
    navMenuSlider: document.querySelector(".nav-slider-container"),
    navMenuCloseBtnEl: document.querySelector(".nav-menu-bar3"),
    navMenuListEl: document.querySelector(".nav-list")
}

function onNavMenuButtonClick(e) {
    e.preventDefault();
    console.log(getComputedStyle(navRefs.navMenuSlider).opacity);
    if (getComputedStyle(navRefs.navMenuSlider).opacity == 0) {
        console.log('on nav click 1',navRefs.navMenuButton.classList.contains("tapped"));
        console.log('on nav click 2',navRefs.navMenuButton.classList.contains("tapped"));
        navRefs.navMenuButton.classList.add("tapped");
        navRefs.navMenuSlider.classList.add("tapped");
        console.log('on nav click 3',navRefs.navMenuButton.classList.contains("tapped"));
        // window.addEventListener('mousedown', onOtherPlaceClick);
    } else {
        console.log('on nav to close', navRefs.navMenuButton.classList.contains("tapped"));
        // window.removeEventListener('mousedown', onOtherPlaceClick);
        navRefs.navMenuButton.classList.remove("tapped");
        navRefs.navMenuSlider.classList.remove("tapped");

    }
    // navRefs.navMenuButton.classList.toggle("tapped");
    // navRefs.navMenuSlider.classList.toggle("tapped");
}
function onOtherPlaceClick(e) {
    e.preventDefault();
    // if (e.target != navRefs.navMenuListEl) {
    //     console.log('other click 1', e.target, e.currentTarget);
    //     navRefs.navMenuButton.classList.remove("tapped");
    //     navRefs.navMenuSlider.classList.remove("tapped");
    // }

    if (getComputedStyle(navRefs.navMenuSlider).opacity ===1) {
        console.log('other click 1',navRefs.navMenuButton.classList.contains("tapped"));
        // window.removeEventListener('mousedown', onOtherPlaceClick);
        console.log('other click 2',navRefs.navMenuButton.classList.contains("tapped"));
        navRefs.navMenuButton.classList.remove("tapped");
        navRefs.navMenuSlider.classList.remove("tapped");
        console.log('other click 3',navRefs.navMenuButton.classList.contains("tapped"));
    }
}
navRefs.navMenuButton.addEventListener('mousedown', onNavMenuButtonClick);
// window.addEventListener('mousedown', onOtherPlaceClick);
// window.addEventListener('click', onOtherPlaceClick);

