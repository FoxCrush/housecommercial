const refs = {
    galleryImages: document.querySelectorAll('[data-image-id]'),
    galleryList: document.querySelector('.gallery-list'),
    galleryCurrentImageViewEl: document.querySelector('.gallery-modal-content-view'),
    galleryModalViewEl: document.querySelector('.gallery-modal-view'),
    bodyEl: document.querySelector('body'),
}

let drag = false;
document.addEventListener('mousedown', () => drag = false);
document.addEventListener('mousemove', () => drag = true);

function closeModalFn(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG' && refs.galleryModalViewEl.classList.contains('isShown')) {
        refs.galleryModalViewEl.classList.remove('isShown');
        const scrollY = document.body.style.top;
        refs.bodyEl.style.position = '';
        refs.bodyEl.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

refs.galleryList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName != "IMG" || drag) {
        return;
    }

    const currentMainViewPosition = window.scrollY;
    const currentImgOptions = {
        src: e.target.src,
        alt: e.target.alt,
        imageId: e.target.dataset.imageId,
    }
    refs.galleryCurrentImageViewEl.src = currentImgOptions.src;
    refs.galleryCurrentImageViewEl.alt = currentImgOptions.alt;
    refs.galleryCurrentImageViewEl.dataset.modalImageId = currentImgOptions.imageId;
    refs.galleryModalViewEl.classList.add('isShown');
    refs.bodyEl.style.top = `-${currentMainViewPosition}px`;
    refs.bodyEl.style.position = 'fixed';
})
refs.galleryModalViewEl.addEventListener('click', closeModalFn);

