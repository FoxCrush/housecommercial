const zenScroll = require("zenscroll");
const windowRefs = {
    navMenuHousesButton: document.querySelector("[data-scroll-to-houses]"),
    navMenuGalleryButton: document.querySelector("[data-scroll-to-gallery]"),
    navMenuLocationButton: document.querySelector("[data-scroll-to-location]"),
    HousesViewEl: document.querySelector(".houses-list-section"),
    GalleryViewEl: document.querySelector(".gallery-section"),
    locationViewEl: document.querySelector(".location-contacs-container"),
    galleryListEl: document.querySelector(".gallery-list"),
    toTopButton: document.querySelector("[data-scroll-to-top]"),
    topElement: document.querySelector(".nav-menu-button-container")
}
let pos = { left: 0, y: 0 };
function moveToHousesFn(e) {
    e.preventDefault();
    zenScroll.to(windowRefs.HousesViewEl, 500);
    // windowRefs.HousesViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
}
function moveToGalleryFn(e) {
    e.preventDefault();
    zenScroll.to(windowRefs.GalleryViewEl, 500);
    // windowRefs.GalleryViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
}
function moveToLocationFn(e) {
    e.preventDefault();
    zenScroll.to(windowRefs.locationViewEl, 500);
    // windowRefs.locationViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
}
function moveToTopFn(e) {
    e.preventDefault();
    zenScroll.to(windowRefs.topElement, 500);
}
function mouseDownHandler(e) {
     e.preventDefault();
        pos = {
        left: windowRefs.galleryListEl.scrollLeft,
        x: e.clientX,
    };
    windowRefs.galleryListEl.style.cursor = 'grabbing';
    windowRefs.galleryListEl.style.userSelect = 'none';

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
function mouseMoveHandler(e) {
    e.preventDefault();
    const dx = e.clientX - pos.x;

    windowRefs.galleryListEl.scrollLeft = pos.left - dx;
};
function mouseUpHandler(e) {
     e.preventDefault();
    windowRefs.galleryListEl.style.cursor = 'grab';
    windowRefs.galleryListEl.style.removeProperty('user-select');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

windowRefs.navMenuHousesButton.addEventListener('click', moveToHousesFn);
windowRefs.navMenuGalleryButton.addEventListener('click', moveToGalleryFn);
windowRefs.navMenuLocationButton.addEventListener('click', moveToLocationFn);
windowRefs.galleryListEl.addEventListener('mousedown', mouseDownHandler);
windowRefs.toTopButton.addEventListener('click', moveToTopFn);
