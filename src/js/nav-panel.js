const navRefs = {
    navMenuButton: document.querySelector(".nav-menu-button-container"),
    navMenuSlider: document.querySelector(".nav-slider-container"),
    navMenuCloseBtnEl: document.querySelector(".nav-menu-bar3"),
    navMenuListEl: document.querySelector(".nav-list"),
    bodyEl: document.querySelector("body")
}

function onNavMenuButtonClick(e) {
    e.preventDefault();
    if (!navRefs.navMenuSlider.classList.contains("tapped")) {
        navRefs.navMenuButton.classList.add("tapped");
        navRefs.navMenuSlider.classList.add("tapped");
        setTimeout(() => {
            console.log('listner added');
            navRefs.bodyEl.addEventListener('click', onOtherPlaceClick);
    }, 200);
    }

}
function onOtherPlaceClick(e) {
    e.preventDefault();
    if (navRefs.navMenuButton.classList.contains("tapped") && e.target !== navRefs.navMenuListEl) {
        navRefs.bodyEl.removeEventListener('click', onOtherPlaceClick);
        console.log('listner removed');
        navRefs.navMenuButton.classList.remove("tapped");
        navRefs.navMenuSlider.classList.remove("tapped");
    }
}
navRefs.navMenuButton.addEventListener('click', onNavMenuButtonClick);


