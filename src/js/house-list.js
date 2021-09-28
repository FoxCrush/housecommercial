const refs = {
    houseListItemEl: document.querySelector(".house-list-item-overlay-container"),
    houseListOverlayEl: document.querySelectorAll(".house-list-item-overlay"),
    houseListEl: document.querySelector("[data-houses-list-action]")
}

refs.houseListEl.addEventListener('click', onImageClickHandler);
let currentHouseIndex = 0;
function onImageClickHandler(e) {
    e.preventDefault();
    if (e.target.getAttribute("data-house-number")) {
    currentHouseIndex = e.target.getAttribute("data-house-number").slice(-1) - 1;
    }
    refs.houseListOverlayEl[currentHouseIndex].classList.toggle('overlay-visible');
}