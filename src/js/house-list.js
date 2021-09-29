const refs = {
    houseListItemEl: document.querySelector(".house-list-item-overlay-container"),
    houseListOverlayEl: document.querySelectorAll(".house-list-item-overlay"),
    houseListEl: document.querySelector("[data-houses-list-action]"),
    bodyEl: document.querySelector("body")
}

refs.houseListEl.addEventListener('click', onImageClickHandler);
let currentHouseIndex = 0;
function onImageClickHandler(e) {
    e.preventDefault();
    if (refs.bodyEl.offsetWidth > 750) {
        refs.houseListOverlayEl.forEach(element => {
            element.classList.remove('overlay-visible');
        });
        return;
    }
        if (e.target.classList.contains('overlay-visible')) {
        e.target.classList.remove('overlay-visible');
            return;
    }
    if (e.target.getAttribute("data-house-number")) {
    currentHouseIndex = e.target.getAttribute("data-house-number").slice(-1) - 1;
    }
    if (e.target.nodeName === "IMG") {
        refs.houseListOverlayEl[currentHouseIndex].classList.add('overlay-visible');
    }
}