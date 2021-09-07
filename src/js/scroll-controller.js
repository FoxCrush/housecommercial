const zenScroll = require("zenscroll");
const windowRefs = {
    navMenuHousesButton: document.querySelector("[data-scroll-to-houses]"),
    navMenuGalleryButton: document.querySelector("[data-scroll-to-gallery]"),
    navMenuLocationButton: document.querySelector("[data-scroll-to-location]"),
    HousesViewEl: document.querySelector(".houses-list-section"),
    GalleryViewEl: document.querySelector(".gallery-section"),
    locationViewEl: document.querySelector(".location-contacs-container"),
    galleryListEl: document.querySelector(".gallery-list"),
    testBtnEl: document.querySelector(".test-btn"),
    bodyEl: document.querySelector("#body")
}
let pos = { left: 0, y: 0 };
function moveToHousesFn(e) {
     e.preventDefault();
    windowRefs.HousesViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
}
function moveToGalleryFn(e) {
     e.preventDefault();
    windowRefs.GalleryViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
}
function moveToLocationFn(e) {
     e.preventDefault();
    windowRefs.locationViewEl.scrollIntoView({ block: "center", behavior: "smooth" });
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
function secondTestFn() {
    console.log('scrolling is done');
}
function testFn(e) {
    e.preventDefault();
    console.log('test btn pressed', zenScroll.to,windowRefs.locationViewEl);
    zenScroll.to(windowRefs.locationViewEl, 500, secondTestFn);
}
windowRefs.navMenuHousesButton.addEventListener('click', moveToHousesFn);
windowRefs.navMenuGalleryButton.addEventListener('click', moveToGalleryFn);
windowRefs.navMenuLocationButton.addEventListener('click', moveToLocationFn);
windowRefs.galleryListEl.addEventListener('mousedown', mouseDownHandler);
windowRefs.testBtnEl.addEventListener('click', testFn);
// windowRefs.galleryListEl.addEventListener('mouseup', mouseUpHandler);
