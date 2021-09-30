const galleryImageArray = [{
    src: "https://i.imgur.com/HCDcv6T.jpg",
    alt: "Just random pictures of estate #1"
},
{
    src: "https://i.imgur.com/I8XbCiq.jpg",
    alt: "Just random pictures of estate #2"
},
{
    src: "https://i.imgur.com/UyuSnZD.jpg",
    alt: "Just random pictures of estate #3"
},
{
    src: "https://i.imgur.com/O75vliy.jpg",
    alt: "Just random pictures of estate #4"
}];
const refs = {
    galleryListSectionEl: document.querySelector(".gallery-list"),
};
function makeGalleryItem({ src, alt }, i) {
    const galleryItem = document.createElement('li');
    const galleryImage = document.createElement('img');

    galleryImage.classList.add('gallery-img');
    galleryImage.src = src;
    galleryImage.alt = alt;
    galleryImage.dataset.imageId = i + 1;

    galleryItem.append(galleryImage);
    // console.log("~ galleryItem", galleryItem);

    return galleryItem;
}

const galleryElements = galleryImageArray.map(makeGalleryItem);
refs.galleryListSectionEl.append(...galleryElements);
